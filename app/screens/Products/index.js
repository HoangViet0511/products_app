import React, {useState, useCallback, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import db from '../../components/firebase/config';
import PRODUCTS from '../../assets/database';
import FeatureProductItem from '../../components/FeatureProductItem';
import Header from '../../components/Header';


const ProductsScreen = () => {

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Products" />
      
    </SafeAreaView>
  );
};

export default ProductsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
