import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

//item and pressHandler are destructured props which is why thay are in curly braces as shown below
export default function TodoLists({ item, pressHandler }) {
    return (
        //item.key references the prop passed to the TodoItem function in app.js
        //OnPress calls an anonymous function to handle the pressHandler
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <View style={styles.item}>
                <MaterialIcons name='delete' size={18} color='red' />
                <Text style={styles.todoText}>{item.text}</Text>
            </View>
        </TouchableOpacity>
    ); 
}

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1.5,
        borderStyle: 'solid',
        borderRadius: 10,
        flexDirection: 'row',
    },
    todoText: {
        marginLeft: 10,
    },
});