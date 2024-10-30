import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function UsersScreen({ navigation }) {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const token = await AsyncStorage.getItem('token');
    if (!token) {
      navigation.navigate('Login');
      return;
    }
    try {
      const response = await fetch('https://reqres.in/api/users?page=1', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const data = await response.json();
      if (response.ok) {
        setUsers(data.data);
      } else {
        console.log('Erro ao carregar usuários');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogout = async () => {
    await AsyncStorage.removeItem('token');
    navigation.navigate('Login');
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <View>
      <Text>Lista de Usuários</Text>
      <Button title="Logout" onPress={handleLogout} />
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('UserDetail', { user: item })}>
            <View>
              <Text>{item.first_name} {item.last_name}</Text>
              <Text>{item.email}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
