import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import { addItem } from '../../store/actions/cart.actions';
import { COLORS } from '../../constants/colors';

export default function WineDetailScreen({ navigation }) {
  const dispatch = useDispatch();
  const wineID = useSelector(state => state.wines.selectedID);
  const wines = useSelector(state => state.wines.list);
  const wine = wines.find(item => item.id === wineID);

  const handlerAddItemCart = () => {
    dispatch(addItem(wine));
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Text style={styles.title}>{wine.name}</Text>
        <Text>{wine.description}</Text>
        <Text>$ {wine.price}</Text>
        <Text>{wine.weight}</Text>
      </View>
      <Button
        title="Agregar al carrito"
        icon={<Ionicons name="add" size={24} color="white" />}
        color={COLORS.primary}
        onPress={handlerAddItemCart}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  info: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontFamily: 'OpenSansBold',
    marginBottom: 10,
  },
});
