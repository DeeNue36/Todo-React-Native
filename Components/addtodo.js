import React, { useState } from 'react';
import { StyleSheet, View, Button, TextInput } from 'react-native';

export default function AddTodo({ submitTodo }) {
    const [text, setText] = useState('');

    const changeHandler = (value) => {
        setText(value)
    }

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder='new todo...'
                onChangeText={changeHandler}
            />
            <Button style
                onPress={() => submitTodo(text)}
                title='Add todo'
                color='grey'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 2,
        borderBottomColor: 'lightblue',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        backgroundColor: 'pink',

    },
})