import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const CEILING_TYPES = [
  { id: '1', title: 'Матовый', description: 'Классический вариант, напоминает идеально покрашенный потолок.' },
  { id: '2', title: 'Глянцевый', description: 'Обладает зеркальным эффектом, визуально расширяет пространство.' },
  { id: '3', title: 'Сатиновый', description: 'Легкий перламутровый блеск, сочетает свойства матового и глянцевого.' },
  { id: '4', title: 'Тканевый', description: 'Повышенная прочность, дышащий материал, премиальный вид.' },
  { id: '5', title: 'Многоуровневый', description: 'Сложные конструкции для зонирования и декоративного освещения.' },
];

const CatalogScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={CEILING_TYPES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Text style={styles.itemDescription}>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  item: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    elevation: 2,
  },
  itemTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2196F3',
  },
  itemDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
});

export default CatalogScreen;
