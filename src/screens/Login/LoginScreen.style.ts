import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/assets/Colors';

export const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    paddingHorizontal: 30,
  },
  titleContainer: {
    paddingTop: 30,
    alignItems: 'center',
  },
  titleText: {
    fontWeight: '600',
    fontSize: 36,
    marginTop: 45,
  },
  textInpuContainer: {
    marginTop: 80,
    alignItems: 'center',
  },
  errorMessage: {
    width: '80%',
    marginTop: 30,
  },
  errorText: {
    fontSize: 12,
    color: Colors.error,
  },
});
