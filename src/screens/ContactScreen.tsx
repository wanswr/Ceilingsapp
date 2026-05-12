import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const ContactScreen: React.FC = () => {
  const handleCall = () => {
    Linking.openURL('tel:+79000000000');
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Свяжитесь с нами</Text>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Телефон:</Text>
          <TouchableOpacity onPress={handleCall}>
            <Text style={styles.link}>+7 (900) 000-00-00</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.value}>info@ceilings-app.ru</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Адрес:</Text>
          <Text style={styles.value}>г. Москва, ул. Примерная, д. 10</Text>
        </View>

        <TouchableOpacity style={styles.callButton} onPress={handleCall}>
          <Text style={styles.callButtonText}>Позвонить менеджеру</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#fff',
    padding: 30,
    borderRadius: 15,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 25,
    textAlign: 'center',
    color: '#333',
  },
  infoRow: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    color: '#999',
    marginBottom: 4,
  },
  value: {
    fontSize: 18,
    color: '#333',
  },
  link: {
    fontSize: 18,
    color: '#2196F3',
    fontWeight: '500',
  },
  callButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  callButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ContactScreen;
