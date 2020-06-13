import React, {useState, useCallback} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  TextInput,
  TouchableHighlight,
} from 'react-native';
import db from '../../components/firebase/config';
import PRODUCTS from '../../assets/database';
import FeatureProductItem from '../../components/FeatureProductItem';
import Header from '../../components/Header';

const ProductsScreen = () => {
  const [currentItemOnView, setCurrentItemOnView] = useState(0);

  const handleChange = useCallback(params => {
    console.log(params.changed);
    setCurrentItemOnView(params.changed[0].index);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Products" />
      <FlatList
        data={PRODUCTS}
        keyExtractor={item => item.id}
        horizontal
        viewabilityConfig={{
          waitForInteraction: true,
          viewAreaCoveragePercentThreshold: 80,
        }}
        onViewableItemsChanged={handleChange}
        renderItem={({item, index}) => (
          <FeatureProductItem
            item={item}
            isCurrent={index === currentItemOnView}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default ProductsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});
