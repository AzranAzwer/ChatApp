import React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './ChannelScreen.style';
import {useNavigation} from '@react-navigation/native';
import {T_NavigationType} from '../../utils/global/Types';
import {GetCurrentUser} from '../../redux/selectors/UserSelectors';
import {useSelector} from 'react-redux';

export interface T_ChannelDataProps {
  id: number;
  name: string;
  img?: string;
  thumbName?: string;
  date: string;
}

const ChannelScreen = () => {
  const navigation: T_NavigationType = useNavigation();
  const currentUser = useSelector(GetCurrentUser());
  const userList1: T_ChannelDataProps[] = [
    {
      id: 1032,
      name: 'Alex P.',
      img: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
      thumbName: 'AP',
      date: 'Apr 30 2023',
    },
    {
      id: 1098,
      name: 'Test user',
      thumbName: 'TS',
      date: '  Apr 14 2023',
    },
  ];

  const userList2: T_ChannelDataProps[] = [
    {
      id: 1098,
      name: 'Bob M.',
      img: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
      thumbName: 'BM',
      date: '  Apr 14 2023',
    },
    {
      id: 1032,
      name: 'Test user',
      thumbName: 'TS',
      date: '  Apr 14 2023',
    },
  ];

  const renderItem = (item: T_ChannelDataProps) => {
    return (
      <TouchableOpacity
        style={styles.rowContainer}
        onPress={() => navigation.navigate('MessageScreen', item)}>
        <View style={styles.thumbnailContainer}>
          {item?.img ? (
            <Image
              source={{
                uri: item.img,
              }}
              style={styles.imgStyle}
            />
          ) : (
            <Text style={styles.thumbnailStyle}>{item?.thumbName}</Text>
          )}
        </View>
        <View style={styles.textConatiner}>
          <Text style={styles.nameConatiner}>{item?.name}</Text>
          <Text style={styles.dateContainer}>{item?.date}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.ScreenContainer}>
      <View>
        <FlatList
          data={currentUser.username === 'Alex' ? userList2 : userList1}
          renderItem={({item}) => renderItem(item)}
        />
      </View>
    </View>
  );
};

export default ChannelScreen;
