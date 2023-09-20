import { StatusBar } from 'expo-status-bar';
// import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, TextInput, ScrollView, FlatList} from 'react-native';

export default function Header () {
    return(
        <View style = {styles.header}>
            <Text style = {styles.title}>My Todos</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        height: 80,
        paddingTop: 25,
        backgroundColor: 'coral',
    },
    title:{
        textAlign: 'center',
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    },
});