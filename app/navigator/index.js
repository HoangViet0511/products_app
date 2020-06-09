import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
import ProductDetailScreen from '../screens/ProductDetail';
import ProductsScreen from '../screens/Products';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {NavigationContainer} from '@react-navigation/native';

const Tabs = createBottomTabNavigator();
const Stack = createStackNavigator();

const BottomTab = () => {
  return (
    <Tabs.Navigator
    initialRouteName="Home"
    tabBarOptions={{
      showLabel: false,
      activeTintColor: 'red',
      inactiveTintColor: '#333333',
    }}
      >
      <Tabs.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => <Icon name="home" size={25} color={color} />,
        }}
      />
      <Tabs.Screen
        name="Products"
        component={ProductsScreen}
        options={{
          tabBarIcon: ({color}) => <Icon name="inbox" size={25} color={color} />,
        }}
      />
    </Tabs.Navigator>
  );
};

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="index" component={BottomTab} />
        <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppContainer;
