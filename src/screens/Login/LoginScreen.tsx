import React, {useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import _ from 'lodash';

import {styles} from './LoginScreen.style';
import {TextInput} from '../../components';
import {T_LoginData} from './Logintypes';
import {Button} from '../../components/Button';
import {T_NavigationType} from '../../utils/global/Types';
import {Colors} from '../../utils/assets/Colors';

const LoginScreen = () => {
  const navigation: T_NavigationType = useNavigation();
  const [loginData, setLoginData] = useState<T_LoginData>({
    username: '',
    password: '',
  });

  const onChangeText = (key: string, value: string) => {
    setLoginData({
      ...loginData,
      [key]: value,
    });
  };

  const onSubmit = () => {
    navigation.navigate('AppStack');
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
          borderColor={Colors.secondary}
          returnKeyType="next"
          autoCapitalize="none"
        />
        {/* <View style={{width: '80%'}}>
          <Text
            style={{
              marginTop: 3,
              fontSize: 12,
              color: 'red',
            }}>
            Enter Correct Username
          </Text>
        </View> */}

        <TextInput
          placeholder="Enter Password"
          onChangeText={value => onChangeText('password', value)}
          value={loginData.password}
          returnKeyType="done"
          autoCapitalize="none"
          borderColor="red"
          marginTop={18}
        />

        <View style={{width: '80%'}}>
          <Text
            style={{
              marginTop: 3,
              fontSize: 12,
              color: Colors.error,
            }}>
            Enter Correct password
          </Text>
        </View>

        <Button
          height={55}
          width={320}
          borderRadius={15}
          marginTop={40}
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
