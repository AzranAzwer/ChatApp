import {T_GroupData} from '../../screens/Home/HomeScreen';

export type T_NavigationType = {
  navigate: (screen: string, params?: T_GroupData) => void;
};
