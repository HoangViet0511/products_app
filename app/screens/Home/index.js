import React, {useEffect, useState, useCallback} from 'react';
import {SafeAreaView, StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';
import Header from '../../components/Header';
import {useDispatch, useSelector} from 'react-redux';
import {actFetchCategories} from '../../redux/actions';

const HomeScreen = () => {
  const dispatch = useDispatch();

  const [selectedCategory, setSelectedCategory] = useState(null);

  const [currentItemOnView, setCurrentItemOnView] = useState(0);

  const categoryList = useSelector(state => state.category.categoryList);
 

  useEffect(() => {
    dispatch(actFetchCategories());
    /*Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
    }).start();

    Animated.spring(slideAnim, {
      toValue: 0,
      duration: 2000,
      friction: 1, //độ ma sát, càng lớn hoạt cảnh càng chậm
      tension: 1, //độ căn, càng lớn hoạt cảnh càng lâu
    }).start();*/
  }, [dispatch]);

  const handleChangeCategory = useCallback(id => () => {
    setSelectedCategory(id);
    //call API, gửi id category lên lấy ds sản phẩm
    //lưu lên store 
    //tại Home, lấy xuống

  },[]);

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