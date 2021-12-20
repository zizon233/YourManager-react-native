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

const Tab = createMaterialTopTabNavigator();

const HomeScreen = () => {
  return (
    <Text>test1</Text>
  );
};

const SettingsScreen = () => {
  return (
    <Text>test1</Text>
  );
};

const Schedule = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default Schedule;