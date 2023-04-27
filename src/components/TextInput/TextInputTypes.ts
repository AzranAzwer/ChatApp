import {ReturnKeyType} from 'react-native/types';

export interface C_TextInputProps {
  placeholder: string;
  onChangeText: () => void;
  value: string;
  returnKeyType?: ReturnKeyType;
  autoCapitalize: string;
}
