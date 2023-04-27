import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';

import {T_ButtonProps} from './ButtonTypes';

export const Button = ({
  title,
  onClick,
  height,
  width,
  borderRadius,
  backgroundColor,
  disabled,
  textColor,
  marginTop,
}: T_ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onClick}
      disabled={disabled}
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        height,
        width,
        borderRadius,
        backgroundColor,
        marginTop,
      }}>
      <View>
        <Text
          style={{
            fontWeight: '600',
            fontSize: 18,
            textAlign: 'center',
            color: textColor,
          }}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
