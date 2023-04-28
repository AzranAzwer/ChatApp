import React from 'react';
import {TextInput as TextInputElement} from 'react-native';
import {T_TextInputProps} from './TextInputTypes';
import {styles} from './TextInput.style';
import {Colors} from '../../utils/assets/Colors';

export const TextInput = ({
  placeholder,
  onChangeText,
  value,
  returnKeyType,
  autoCapitalize,
  marginTop,
  borderColor,
}: T_TextInputProps) => {
  return (
    <TextInputElement
      style={{...styles.container, marginTop, borderColor}}
      value={value}
      placeholder={placeholder}
      placeholderTextColor={Colors.secondary}
      onChangeText={onChangeText}
      returnKeyType={returnKeyType}
      autoCapitalize={autoCapitalize}
    />
  );
};
