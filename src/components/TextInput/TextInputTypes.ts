import {ReturnKeyType} from 'react-native/types';

export interface T_TextInputProps {
  placeholder: string;
  onChangeText: (value: string) => void;
  value: string;
  returnKeyType?: ReturnKeyType;
  autoCapitalize: 'none' | 'sentences' | 'words' | 'characters' | undefined;
  marginTop?: number;
  borderColor?: string;
}
