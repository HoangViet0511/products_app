import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableHighlight,
} from 'react-native';
import db from '../../components/firebase/config';

const ProductsScreen = () => {
  /*const addItem = item => {
    db.ref('/items').push({
      name: item,
    });
  };

  const state = {
    name: ''
  };

  const handleChange = e => {
    setState({
      name: e.nativeEvent.text,
    });
  };

  const handleSubmit = () => {
    addItem(state.name);
    AlertIOS.alert('Item saved successfully');
  };*/

  return (
    <SafeAreaView style={styles.main}>
      <Text style={styles.title}>Add Item</Text>
      <TextInput style={styles.itemInput} /*onChange={handleChange}*/ />
      <TouchableHighlight
        style={styles.button}
        underlayColor="white"
        /*onPress={handleSubmit}*/>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableHighlight>
    </SafeAreaView>
  );
};

export default ProductsScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 30,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#6565fc',
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center',
  },
  itemInput: {
    height: 50,
    padding: 4,
    marginRight: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: 'white',
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center',
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
});
