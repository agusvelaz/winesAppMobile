import React, { useState } from 'react';
import { View, Text, ScrollView, Button, TextInput, StyleSheet } from 'react-native'
import { useDispatch } from 'react-redux';
import {COLORS} from '../../constants/colors';
import ImageSelector from '../../components/ImageSelector';
import { addWine } from '../../store/actions/myWine.action';

const AddMyWine = ({ navigation }) => {
    const dispatch = useDispatch()
    const [title, setTitle] = useState();
    const [image, setImage] = useState();
    const [detail, setDetail] = useState();

    const handleSave = () => {
        dispatch(addWine(title, image, detail))
        navigation.navigate('Mis vinos') 
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.label}>Titulo</Text>
                <TextInput
                    style={styles.input}
                    value={title}
                    onChangeText={setTitle}
                />

                <ImageSelector setImage={setImage} />
                <Text style={styles.label}>Detalle</Text>
                <TextInput
                    style={styles.input}
                    value={detail}
                    onChangeText={setDetail}
                />

                <Button
                    title="GUARDAR"
                    color={COLORS.MAROON}
                    onPress={handleSave}
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 30,
    },
    label: {
        fontSize: 18,
        marginBottom: 16,
    },
    input: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 2,
        paddingVertical: 4,
    },
})

export default AddMyWine;
