import React, {useState} from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {T_ScreenNavigationType} from '../ScreenTypes';
import {Styles} from '../../utils/global/style';
import {styles} from './LoginScreen.style';
import {TextInput} from '../../components';
import {T_LoginData} from './Logintypes';

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

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Text fontWeight="700" lineHeight={25.2} marginTop={90} fontSize={21}>
          Login
        </Text>
      </View>
      <View style={styles.textInpuContainer}>
        <TextInput
          placeholder="Enter Username"
          onChangeText={(value: string) => onChangeText('username', value)}
          value={loginData.username}
          returnKeyType="next"
          autoCapitalize="none"
        />
        <View style={{width: '100%'}}>
          {emailError ? (
            <Text
              marginTop={8}
              fontWeight="400"
              lineHeight={16}
              fontSize={12}
              color={Colors.Red}>
              {TextElements.EMAIL_ERROR}
            </Text>
          ) : null}
        </View>

        <TextInput
          secureTextEntry={encryptStatus}
          marginTop={12}
          placeholder={t('PASSWORD_PLACEHOLDER')}
          onChangeText={value => onChangeText('password', value)}
          value={loginData.password}
          returnKeyType="next"
          icon={<PasswordViewIcon />}
          borderWidth={loginData.password ? 1 : 0}
          borderColor={
            loginData.password
              ? errorField
                ? Colors.Red
                : dark
                ? Colors.DarkBorder
                : Colors.InputActive
              : null
          }
          backgroundColor={dark ? Colors.SecondaryDark : Colors.White}
          color={dark ? Colors.White : Colors.TextGrey}
          onPress={() => setEncryptStatus(!encryptStatus)}
        />
        <View style={{width: '100%'}}>
          {isError ? (
            <Text
              marginTop={8}
              fontWeight="400"
              lineHeight={16}
              fontSize={12}
              color={Colors.Red}>
              {TextElements.NO_ACCOUNTS_FOUNDS}
            </Text>
          ) : null}
        </View>

        <View style={styles.textContainer}>
          <View style={styles.rememberTextContainer}>
            <CheckBox
              style={{width: 24, height: 24}}
              tintColor={Colors.Sunrise}
              onCheckColor={Colors.White}
              onFillColor={Colors.Sunrise}
              onTintColor={Colors.Sunrise}
              tintColors={{true: Colors.Sunrise, false: Colors.Sunrise}}
              boxType="square"
              disabled={false}
              value={toggleCheckBox}
              onValueChange={newValue => setToggleCheckBox(newValue)}
            />
            <Text
              fontWeight="500"
              lineHeight={17.5}
              marginLeft={12}
              color={dark ? Colors.White : Colors.DarkCharcoal}>
              {t('REMEMBER_ME')}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('ResetPasswordScreen')}>
            <Text
              fontWeight="500"
              lineHeight={17.5}
              color={Colors.Sunrise}
              marginTop={3}>
              {t('FORGOT_PASSWORD_QUESTION')}
            </Text>
          </TouchableOpacity>
        </View>
        <Button
          disabled={
            _.isEmpty(loginData.username) || _.isEmpty(loginData.password)
          }
          onClick={onLogin}
          title={TextElements.LOGIN}
          backgroundColor={
            _.isEmpty(loginData.username) || _.isEmpty(loginData.password)
              ? dark
                ? Colors.Devider
                : Colors.SunriseGrey
              : Colors.Sunrise
          }
          textColor={
            _.isEmpty(loginData.username) || _.isEmpty(loginData.password)
              ? dark
                ? Colors.White
                : Colors.DarkGrey
              : Colors.White
          }
        />
      </View>
    </View>

    // <SafeAreaView style={Styles.ScreenContainer}>
    //   <Text>LoginScreen</Text>
    //   <TouchableOpacity onPress={() => navigation.navigate('AppStack')}>
    //     <Text>Press me</Text>
    //   </TouchableOpacity>
    // </SafeAreaView>
  );
};

export default LoginScreen;
