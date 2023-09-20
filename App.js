import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Alert, View, TouchableWithoutFeedback, Keyboard, FlatList } from 'react-native';
import Header from './Components/header';
import TodoLists from './Components/todolists';
import AddTodo from './Components/addtodo';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'buy bread', key: '1' },
    { text: 'practice react native', key: '2' },
    { text: 'play rec room with buky', key: '3' }
  ]);

  //function to add a new todo to the existing todos
  const submitTodo = (text) => {
    //validating the button so that it doesn't add an empty todo using the if-else statement
    if (text.length > 3) {
      // adding a new todo to the list and assigning it a random key
      setTodos((oldTodos) => {
        return [
          { text: text, key: Math.random().toString() },
          ...oldTodos
        ]
      })
    }
    // adding an alert message
    else {
      Alert.alert('Sorry', 'The todos should be over 3 characters long', [
        { text: 'Understood', onPress: () => console.log('close alert') }
      ])
    }

  }

  //function to delete the todos by filtering through the todos list using their keys
  const pressHandler = (key) => {
    setTodos((oldTodos) => {
      return oldTodos.filter(todo => todo.key != key);
    })
  }

  return (

    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
      console.log('keyboard has been dismissed');
     }}>

      <View style={styles.container}>
        <Header />{/* header from header.js */}
        <View style={styles.content}>

          {/*TextInput and button which shows add todo from addtodo.js*/}
          <AddTodo submitTodo={submitTodo} />{/*submitTodo is a prop used to link the function to AddTodo.js*/}
          
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoLists item={item} pressHandler={pressHandler} />
                /*pressHandler links the function pressHandler to todolists.js*/
                /*TodoLists is a function to todolists.js which has item as a prop so that it is accessible to todolists.js*/
              )}
            />
          </View>

        </View>
        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 40,
  },
  list: {
    flex: 1,
    marginTop: 20,
  },
});