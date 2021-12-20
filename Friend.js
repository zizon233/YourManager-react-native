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
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import axios from 'axios';

const Tab = createMaterialTopTabNavigator();

const Chat = () => {
  return(
    <View>
      <Text>Chat</Text>
    </View>
  );
};

const Friend = () => {
  return(
    <View>
      <Text>Chat</Text>
    </View>
  );
};

const FriendMain = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="채팅" component={Chat} />
      <Tab.Screen name="친구" component={Friend} />
    </Tab.Navigator>
  );
};

export default FriendMain;