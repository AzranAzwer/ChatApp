import React from 'react';
import {TextInput as TextInputElement} from 'react-native';
import {T_TextInputProps} from './TextInputTypes';
import {styles} from './TextInput.style';

export const TextInput = ({
  placeholder,
  onChangeText,
  value,
  returnKeyType,
  autoCapitalize,
  marginTop,
}: T_TextInputProps) => {
  return (
    <TextInputElement
      style={{...styles.container, marginTop}}
      value={value}
      placeholder={placeholder}
      placeholderTextColor="#808080"
      onChangeText={onChangeText}
      returnKeyType={returnKeyType}
      autoCapitalize={autoCapitalize}
    />
  );
};
