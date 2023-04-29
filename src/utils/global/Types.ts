import {T_ChannelDataProps} from '../../screens/Channel/ChannelScreen';
import {T_GroupData} from '../../screens/Home/HomeScreen';

export type T_NavigationType = {
  navigate: (screen: string, params?: T_GroupData | T_ChannelDataProps) => void;
  dispatch: (data?: any) => void;
};
