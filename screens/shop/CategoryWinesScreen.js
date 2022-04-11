import React, { useEffect } from 'react';
import { FlatList, View, ActivityIndicator, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import WineElement from '../../components/WineElement';
import { selectWine, filterWines } from '../../store/actions/wine.actions';
import { COLORS } from '../../constants/colors';

export default function CategoryWinesScreen({ navigation }) {
  const dispatch = useDispatch();
  const categoryID = useSelector(state => state.categories.selectedID);
  const wines = useSelector(state => state.wines.filteredWines);

  useEffect(() => {
    // dispatch(filterWines());
    setTimeout(() => dispatch(filterWines(categoryID)), 1000);

    return () => {
      dispatch(filterWines());
    }
  }, [categoryID]);

  const handleSelected = (item) => {
    dispatch(selectWine(item.id));
    navigation.navigate('Detail', {
      name: item.name,
    });
  }

  const renderItemWine = ({ item }) => (
    <WineElement item={item} onSelected={handleSelected} />
  )

  return (
    <View style={styles.container}>
      {wines.length
        ? (
          <FlatList
            data={wines}
            keyExtractor={item => item.id}
            renderItem={renderItemWine}
          />
        )
        : <ActivityIndicator color={COLORS.accent} size="large" />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});