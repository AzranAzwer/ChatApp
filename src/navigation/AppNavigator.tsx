import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '../screens/Home/HomeScreen';
import ChannelScreen from '../screens/Channel/ChannelScreen';
import MessageScreen from '../screens/Message/MessageScreen';
import {Colors} from '../utils/assets/Colors';

const Stack = createNativeStackNavigator();

export const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ChannelScreen"
        component={ChannelScreen}
        options={({route}) => ({
          headerTitle: route?.params?.name,
          headerShadowVisible: false,
        })}
      />
      <Stack.Screen name="MessageScreen" component={MessageScreen} />
    </Stack.Navigator>
  );
};
