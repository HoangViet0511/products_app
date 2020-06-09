import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Header from '../../components/Header';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <Header title="Discover" />
      <View>
        <View>
          <Text style={styles.txt}>ABC</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  txt: {
    fontSize: 20,
    color: 'red',
  },
});
