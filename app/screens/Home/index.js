import React, {useEffect, useState, useCallback} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image,
  Animated,
} from 'react-native';
import Header from '../../components/Header';
import {useDispatch, useSelector} from 'react-redux';
import {actFetchCategories, actGetProductCategory} from '../../redux/actions';
import Icon from 'react-native-vector-icons/AntDesign';
import FeatureProductItem from '../../components/FeatureProductItem';
import PRODUCTS from '../../assets/database';

const HomeScreen = () => {
  const dispatch = useDispatch();

  const [selectedCategory, setSelectedCategory] = useState(null);

  const [fadeAnim, setFadeAnim] = useState(new Animated.Value(0));
  const [slideAnim] = useState(new Animated.Value(-200));

  const [currentItemOnView, setCurrentItemOnView] = useState(0);

  const categoryList = useSelector(state => state.category.categoryList);
 

  useEffect(() => {
    dispatch(actFetchCategories());
  }, [dispatch, fadeAnim, slideAnim]);

  const handleChangeCategory = useCallback(id => () => {
    setSelectedCategory(id);
    //call API, gửi id category lên lấy ds sản phẩm
    //lưu lên store 
    //tại Home, lấy xuống
    
    
  },[dispatch]);

 
  //Lưu giá trị vị trí người dùng kéo đến
  const handleChange = useCallback(params => {
    console.log(params.changed);
    setCurrentItemOnView(params.changed[0].index);
  }, []);

  return (
    <SafeAreaView>
      <Header title="Discover" />
      <View style={styles.categoryContainer}>
        <FlatList
          data={categoryList}
          keyExtractor={item => item.id}
          horizontal
          renderItem={({item, index}) => {
            const isSelected = item.id === selectedCategory;
            const categoryNameStyle = isSelected
              ? {...styles.categoryName, ...styles.active}
              : styles.categoryName;
            return (
              <TouchableOpacity
                onPress={handleChangeCategory(item.id)}
                style={styles.categoryItem}>
                <Text style={categoryNameStyle}>{item.category}</Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <View>
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
            <FeatureProductItem  item={item} isCurrent={index === currentItemOnView} />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  categoryContainer: {
    marginTop: 20,
  },
  categoryItem: {
    marginHorizontal: 15,
  },
  categoryName: {
    fontSize: 17,
  },
  active: {
    color: 'red',
  },
});
