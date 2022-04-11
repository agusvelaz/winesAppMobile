import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Platform, StyleSheet, TouchableOpacity } from "react-native";
import {COLORS} from "../../constants/colors";
import MyWines from "../../screens/myWines/MyWines";
import AddMyWine from '../../screens/myWines/AddMyWine';
import MyWinesDetail from '../../screens/myWines/MyWineDetail'
import { Ionicons } from '@expo/vector-icons'

const Stack = createNativeStackNavigator();

export default function MyWinesNav() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: styles.header,
        headerTitleStyle: styles.headerTitle,
        headerTintColor: Platform.OS === "ios" ? COLORS.primary : "white",
      }}
    >
      <Stack.Screen
        name="Mis vinos"
        component={MyWines}
        options={({ navigation }) => ({
            title: 'Mis Vinos',
            headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate('Nuevo')}>
                    <Ionicons
                        name="md-add"
                        color={Platform.OS === 'ios' ? COLORS.primary : 'white'}
                        size={24}
                    />
                </TouchableOpacity>
            )
        })}
      />
      <Stack.Screen
            name="Detalle"
            component={MyWinesDetail}
            options={{title: 'Detalle direccion'}} 
        />
        <Stack.Screen
            name="Nuevo"
            component={AddMyWine}
            options={{title: 'Nueva direccion'}} 
        />
    </Stack.Navigator>
  );
}
7;
const styles = StyleSheet.create({
  header: {
    backgroundColor: Platform.OS === "ios" ? "white" : COLORS.primary,
  },
  headerTitle: {
    fontWeight: "bold",
  },
});
