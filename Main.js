/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {
  useState
} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';
import axios from 'axios';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Schedule from './Schedule.js';
import Friend from './Friend.js';
import Group from './Group.js';
import Settings from './Settings.js';

const Tab = createBottomTabNavigator();

const Main = () => {
  const address='http://ec2-3-20-235-174.us-east-2.compute.amazonaws.com:8000/test';
  const [data, setData] = useState({
    hello:"test"
  });
  const [text, setText] = useState('TESTING')
  const test = () => {
    response=axios.get(address)
               .then(function (response) {
                 console.log(response.data);
                 setData(response.data);
               })
               .catch(function (error) {
                 console.log(error);
               });
    setText('TESTED')
  };

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="일정" component={Schedule} />
        <Tab.Screen name="채팅" component={Friend} />
        <Tab.Screen name="모임" component={Group} />
        <Tab.Screen name="설정" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};



export default Main;

/*    */