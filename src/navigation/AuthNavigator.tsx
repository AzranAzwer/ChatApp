import React, {useEffect, useMemo} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import LoginScreen from '../screens/Login/LoginScreen';
import {AppNavigator} from './AppNavigator';
import {GetCurrentUser} from '../redux/selectors/UserSelectors';
import {userLogin} from '../redux/action/LoginAction';

const Stack = createNativeStackNavigator();

export const AuthNavigator = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(GetCurrentUser());

  const userData = useMemo(() => {
    if (currentUser.username) {
      return currentUser;
    }
    if (!currentUser) {
      return null;
    }
  }, [currentUser]);

  useEffect(() => {
    const getData = async () => {
      const jsonValue = await AsyncStorage.getItem('@user_Data');
      const data = jsonValue != null ? JSON.parse(jsonValue) : null;
      if (data) {
        dispatch(userLogin(data) as any);
      }
      return data;
    };

    if (!userData) {
      getData();
    }
  }, [dispatch, userData]);

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {userData ? (
        <Stack.Screen name="AppStack" component={AppNavigator} />
      ) : (
        <>
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{gestureEnabled: false}}
          />
          <Stack.Screen name="AppStack" component={AppNavigator} />
        </>
      )}
    </Stack.Navigator>
  );
};
