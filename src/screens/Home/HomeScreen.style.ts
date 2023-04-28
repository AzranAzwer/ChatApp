import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/assets/Colors';

export const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  screenAlign: {
    paddingLeft: 40,
    paddingTop: 30,
  },
  centerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  groupContainer: {
    height: 200,
    width: 200,
    borderRadius: 100,
    backgroundColor: Colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Colors.white,
    borderWidth: 3,
  },
  imageStyle: {
    height: 200,
    width: 200,
    borderRadius: 100,
    borderColor: Colors.white,
    borderWidth: 3,
  },
  nameTextStyle: {
    paddingLeft: 15,
    fontSize: 18,
    fontWeight: '500',
  },
  thumbName: {
    fontSize: 80,
    color: Colors.white,
    fontWeight: '700',
  },
  footerStyle: {
    alignItems: 'center',
    marginTop: 20,
  },
});
