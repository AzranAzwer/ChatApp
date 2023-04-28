import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/assets/Colors';

export const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  rowContainer: {
    paddingHorizontal: 30,
    height: 58,
    width: '100%',
    flexDirection: 'row',
    marginTop: 20,
  },
  thumbnailContainer: {
    height: 58,
    width: 58,
    borderRadius: 30,
    borderColor: Colors.primary,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgStyle: {
    height: 58,
    width: 58,
    borderRadius: 30,
  },
  thumbnailStyle: {
    fontSize: 28,
    color: Colors.black,
    fontWeight: '500',
  },
  textConatiner: {
    paddingLeft: 15,
    paddingTop: 10,
  },
  nameConatiner: {
    fontSize: 17,
    fontWeight: '500',
  },
  dateContainer: {
    fontSize: 13,
    color: Colors.secondary,
    marginTop: 2,
  },
});
