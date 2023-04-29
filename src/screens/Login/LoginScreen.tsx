import React, {useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import _ from 'lodash';
import {useDispatch} from 'react-redux';

import {styles} from './LoginScreen.style';
import {TextInput} from '../../components';
import {T_LoginData} from './Logintypes';
import {Button} from '../../components/Button';
import {T_NavigationType} from '../../utils/global/Types';
import {Colors} from '../../utils/assets/Colors';
import {users} from '../../utils/constants/UserData';
import {userLogin} from '../../redux/action/LoginAction';

const LoginScreen = () => {
  const dispatch = useDispatch();
  const navigation: T_NavigationType = useNavigation();
  const [error, setError] = useState(false);
  const [loginData, setLoginData] = useState<T_LoginData>({
    username: '',
    password: '',
  });

  const onChangeText = (key: string, value: string) => {
    setError(false);
    setLoginData({
      ...loginData,
      [key]: value,
    });
  };

  const onSubmit = () => {
    // const results = _.some(users, loginData);
    if (_.some(users, loginData)) {
      dispatch(userLogin(loginData) as any);
      navigation.navigate('AppStack');
    } else {
      setError(true);
    }
    // ;
  };

  return (
    <SafeAreaView style={styles.ScreenContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Login</Text>
      </View>
      <View style={styles.textInpuContainer}>
        <TextInput
          placeholder="Enter Username"
          onChangeText={value => onChangeText('username', value)}
          value={loginData.username}
          borderColor={error ? Colors.error : Colors.secondary}
          returnKeyType="next"
          autoCapitalize="none"
        />

        <TextInput
          placeholder="Enter Password"
          onChangeText={value => onChangeText('password', value)}
          value={loginData.password}
          returnKeyType="done"
          autoCapitalize="none"
          borderColor={error ? Colors.error : Colors.secondary}
          marginTop={18}
        />
        {error && (
          <View style={styles.errorMessage}>
            <Text style={styles.errorText}>Enter Correct user data !</Text>
          </View>
        )}

        <Button
          height={55}
          width={320}
          borderRadius={15}
          marginTop={20}
          title="Login"
          textColor={Colors.white}
          onClick={onSubmit}
          disabled={
            _.isEmpty(loginData.username) || _.isEmpty(loginData.password)
          }
          backgroundColor={
            _.isEmpty(loginData.username) || _.isEmpty(loginData.password)
              ? Colors.secondary
              : Colors.primary
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
