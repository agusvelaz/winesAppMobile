import React from 'react';
import { Platform } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from '../../screens/shop/CategoriesScreen';
import CategoryWineScreen from '../../screens/shop/CategoryWinesScreen';
import WineDetailScreen from '../../screens/shop/WineDetailScreen';
import { COLORS } from '../../constants/colors';

const Stack = createNativeStackNavigator();

const ROUTES = {
  HOME: 'Home',
}

const ShopNavigator = () => (
  <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? COLORS.primary : '',
      },
      headerTintColor: Platform.OS === 'android' ? 'white' : COLORS.primary,
      headerTitleStyle: {
        fontWeight: 'bold',
      }
    }}
  >
    <Stack.Screen
      name={ROUTES.HOME}
      component={CategoriesScreen}
      options={{
        title: 'Vinos',
      }}
    />
    <Stack.Screen
      name="Products"
      component={CategoryWineScreen}
      options={({ route }) => ({
        title: route.params.name,
      })}
    />
    <Stack.Screen
      name="Detail"
      component={WineDetailScreen}
      options={({ route }) => ({
        title: route.params.name,
      })}
    />
  </Stack.Navigator>
);

export default ShopNavigator;