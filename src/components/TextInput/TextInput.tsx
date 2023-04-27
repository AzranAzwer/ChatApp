import React from 'react';
import {TextInput as TextInputElement} from 'react-native';
import {C_TextInputProps} from './TextInputTypes';

const T_TextInputProps;

export const TextInput = ({
  placeholder,
  onChangeText,
  value,
  returnKeyType,
  autoCapitalize,
}): C_TextInputProps => {
  return (
    <TextInputElement
      value={value}
      placeholder={placeholder}
      onChangeText={onChangeText}
      returnKeyType={returnKeyType}
      autoCapitalize={autoCapitalize}
    />
  );
};
