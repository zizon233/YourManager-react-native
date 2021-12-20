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
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Calendars from './Calendar.js';

const Tab = createMaterialTopTabNavigator();
const Drawer = createDrawerNavigator();

const Home = () => {
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
    <View>
    <TouchableOpacity style={{}}>
        <Text>버튼</Text>
      </TouchableOpacity>
    <ScrollView>
      <Text>{data.hello}</Text>
      <Text>{data.hello}</Text>
      <Text>{data.hello}</Text>
      <Text>{data.hello}</Text>
      <Text>{data.hello}</Text>
      <Text>{data.hello}</Text>
      <Text>{data.hello}</Text>
      <Text>{data.hello}</Text>
      <Text>{data.hello}</Text>
      <Text>{data.hello}</Text>
      <Text>{data.hello}</Text>
      <Text>{data.hello}</Text>
      <Text>{data.hello}</Text>
      <Text>{data.hello}</Text>
      <Text>{data.hello}</Text>
      <Text>{data.hello}</Text>
      <Text>{data.hello}</Text>
      <Text>{data.hello}</Text>
      <Text>{data.hello}</Text>
      <Text>{data.hello}</Text>
      <Text>{data.hello}</Text>
      <Text>{data.hello}</Text>
      <Text>{data.hello}</Text>
      <Text>{data.hello}</Text>
      <Text>{data.hello}</Text>
      <Text>{data.hello}</Text>
      <Text>{data.hello}</Text>
      <Text>{data.hello}</Text>
      <Text>{data.hello}</Text>
      <Text>{data.hello}</Text>
      <Text>{data.hello}</Text>
      <Text>{data.hello}</Text>
      <Text>{data.hello}</Text>
      <Text>{data.hello}</Text>
      <Text>{data.hello}</Text>
      <Text>{data.hello}</Text>
      <Text>{data.hello}</Text>
      <Text>{data.hello}</Text>
      <Text>{data.hello}</Text>
      <Text>{data.hello}</Text>
      <Text>{data.hello}</Text>
      <Text>{data.hello}</Text>
      <Text>{data.hello}</Text>
      <Text>{data.hello}</Text>
      <Text>{data.hello}</Text>
      <Text>{data.hello}</Text>
      <Text>{data.hello}</Text>
      <Text>{data.hello}</Text>
      <Text>{data.hello}</Text>
    </ScrollView>
    </View>
  );
};

const Schedule = () => {
  return (
    <Text>test2</Text>
  );
};

const ScheduleTopTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Schedule" component={Schedule} />
    </Tab.Navigator>
  );
}

const ScheduleMain = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="일정" component={Home} />
      <Tab.Screen name="달력" component={Calendars} />
      <Tab.Screen name="간편 관리" component={Schedule} />
    </Tab.Navigator>
  );
};

export default ScheduleMain;
/*
      <Drawer.Navigator>
        <Drawer.Screen
          name="Home"
          options={{drawerLabel: 'Home Screen Option'}}
          component={Home}
          options={{ swipeEnabled: false}}
        />
        <Drawer.Screen
          name="Schedule"
          options={{drawerLabel: 'Setting Screen Option'}}
          component={Schedule}
        />
      </Drawer.Navigator>
*/
