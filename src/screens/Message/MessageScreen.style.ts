import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/assets/Colors';

export const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  chatBottomStyle: {
    marginBottom: 10,
  },
  textBoxContainer: {
    paddingVertical: 10,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 4,
    borderTopWidth: 1,
    borderTopColor: Colors.primary,
  },
  textinput: {
    height: 47,
    flex: 1,
    paddingHorizontal: 10,
  },
  messageSend: {
    marginRight: 8,
    paddingHorizontal: 15,
    justifyContent: 'center',
    backgroundColor: Colors.primary,
  },
});
