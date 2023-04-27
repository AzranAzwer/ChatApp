import React, {useState} from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import _ from 'lodash';

import {T_ScreenNavigationType} from '../ScreenTypes';
import {Styles} from '../../utils/global/style';
import {styles} from './LoginScreen.style';
import {TextInput} from '../../components';
import {T_LoginData} from './Logintypes';
import {Button} from '../../components/Button';

const LoginScreen = () => {
  const navigation: T_ScreenNavigationType = useNavigation();
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
    <SafeAreaView style={Styles.ScreenContainer}>
      <View style={styles.title}>
        <Text
          style={{
            fontWeight: '600',
            fontSize: 36,
            marginTop: 45,
          }}>
          Login
        </Text>
      </View>
      <View style={styles.textInpuContainer}>
        <TextInput
          placeholder="Enter Username"
          onChangeText={value => onChangeText('username', value)}
          value={loginData.username}
          returnKeyType="next"
          autoCapitalize="none"
        />
        <View>
          {/* {emailError ? (
            <Text style={{marginTop: 8, fontSize: 12, color: 'red'}}>
              Enter Correct Username
            </Text>
          ) : null} */}
        </View>

        <TextInput
          placeholder="Enter Password"
          onChangeText={value => onChangeText('password', value)}
          value={loginData.password}
          returnKeyType="done"
          autoCapitalize="none"
          marginTop={25}
        />
        <View>
          {/* {isError ? (
            <Text
              marginTop={8}
              fontWeight="400"
              lineHeight={16}
              fontSize={12}
              color={Colors.Red}>
              {TextElements.NO_ACCOUNTS_FOUNDS}
            </Text>
          ) : null} */}
        </View>

        <Button
          height={55}
          width={320}
          borderRadius={15}
          marginTop={40}
          title="Login"
          textColor="white"
          onClick={onSubmit}
          disabled={
            _.isEmpty(loginData.username) || _.isEmpty(loginData.password)
          }
          backgroundColor={
            _.isEmpty(loginData.username) || _.isEmpty(loginData.password)
              ? 'grey'
              : '#6082B6'
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
