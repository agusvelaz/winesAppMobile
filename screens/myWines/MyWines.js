import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { useSelector } from 'react-redux';
import MyWine from '../../components/MyWine';

const MyWines = () => {
    const wines = useSelector(state => state.myWines.myWines);
    console.log(wines)
    return (
        <View style={styles.container}>
            <Text>En esta seccion puedes agregar y guardar, en una lista, tus vinos con un titulo, una foto y una descripcion.</Text>
{/* 
          <FlatList
          data={myWines}
          keyExtractor={item => item.id}
          renderItem={item => <MyWine item={item.item}/>}
        /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default MyWines
