import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function UserDetailsScreen({ route }) {
  const { user } = route.params; 

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalhes do Usuário</Text>
      <Text>Nome: {user.first_name} {user.last_name}</Text>
      <Text>Email: {user.email}</Text>
      <Text>ID: {user.id}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
