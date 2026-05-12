import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';

const CalculatorScreen: React.FC = () => {
  const [area, setArea] = useState('');
  const [perimeter, setPerimeter] = useState('');
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    const a = parseFloat(area) || 0;
    const p = parseFloat(perimeter) || 0;
    // Примерная формула: 500р за кв.м + 100р за пог.м периметра
    const total = (a * 500) + (p * 100);
    setResult(total);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.label}>Площадь помещения (м²):</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={area}
        onChangeText={setArea}
        placeholder="Например, 15"
      />

      <Text style={styles.label}>Периметр (м):</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={perimeter}
        onChangeText={setPerimeter}
        placeholder="Например, 16"
      />

      <TouchableOpacity style={styles.button} onPress={calculate}>
        <Text style={styles.buttonText}>Рассчитать стоимость</Text>
      </TouchableOpacity>

      {result !== null && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultLabel}>Предварительная стоимость:</Text>
          <Text style={styles.resultValue}>{result.toLocaleString()} ₽</Text>
          <Text style={styles.note}>* Стоимость является ориентировочной</Text>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 12,
    borderRadius: 8,
    marginBottom: 20,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultContainer: {
    marginTop: 30,
    padding: 20,
    backgroundColor: '#e3f2fd',
    borderRadius: 10,
    alignItems: 'center',
  },
  resultLabel: {
    fontSize: 18,
    color: '#333',
  },
  resultValue: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2196F3',
    marginVertical: 10,
  },
  note: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
});

export default CalculatorScreen;
