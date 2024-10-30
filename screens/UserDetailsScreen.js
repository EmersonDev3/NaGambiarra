import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function UserDetailsScreen({ route }) {
  const { user } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalhes do Usuário</Text>
      <View style={styles.userCard}>
        <Image source={{ uri: user.avatar }} style={styles.avatar} />
        <Text style={styles.userName}>
          Nome: {user.first_name} {user.last_name}
        </Text>
        <Text style={styles.userEmail}>Email: {user.email}</Text>
        <Text style={styles.userPhone}>Telefone: {user.phone || 'Não disponível'}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4caf50',
    marginBottom: 20,
    textAlign: 'center',
  },
  userCard: {
    backgroundColor: '#f7f7f7',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
    borderWidth: 2,
    borderColor: '#4caf50', // Borda verde ao redor do avatar
  },
  userName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  userEmail: {
    fontSize: 16,
    color: '#888',
    marginBottom: 5,
  },
  userPhone: {
    fontSize: 16,
    color: '#888',
  },
});
