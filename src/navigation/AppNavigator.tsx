import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import CalculatorScreen from '../screens/CalculatorScreen';
import CatalogScreen from '../screens/CatalogScreen';
import ContactScreen from '../screens/ContactScreen';

export type RootStackParamList = {
  Home: undefined;
  Calculator: undefined;
  Catalog: undefined;
  Contacts: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#2196F3',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Главная' }}
      />
      <Stack.Screen
        name="Calculator"
        component={CalculatorScreen}
        options={{ title: 'Калькулятор' }}
      />
      <Stack.Screen
        name="Catalog"
        component={CatalogScreen}
        options={{ title: 'Каталог полотен' }}
      />
      <Stack.Screen
        name="Contacts"
        component={ContactScreen}
        options={{ title: 'Контакты' }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
