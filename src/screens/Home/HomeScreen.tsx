import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {styles} from './HomeScreen.style';
import {useNavigation} from '@react-navigation/native';
import {T_NavigationType} from '../../utils/global/Types';
import {Button} from '../../components/Button';
import {Colors} from '../../utils/assets/Colors';

export interface T_GroupData {
  id: number;
  name: string;
  thumbName: string;
  img?: string;
}

const HomeScreen = () => {
  const navigation: T_NavigationType = useNavigation();
  const data: T_GroupData[] = [
    {
      id: 1032,
      name: 'Friends Group',
      img: 'https://images.pexels.com/photos/935835/pexels-photo-935835.jpeg?cs=srgb&dl=pexels-vjapratama-935835.jpg&fm=jpg',
      thumbName: 'FG',
    },
    {
      id: 1098,
      name: 'Business Group',
      thumbName: 'BG',
    },
    {
      id: 1074,
      name: 'Office Group',
      thumbName: 'OG',
    },
  ];

  const renderItem = (item: T_GroupData, idx: number) => {
    return (
      <TouchableOpacity
        style={{...styles.centerRow, marginTop: idx !== 0 ? 25 : 0}}
        onPress={() => navigation.navigate('ChannelScreen', item)}>
        <View style={styles.groupContainer}>
          {item?.img ? (
            <Image
              source={{
                uri: item?.img,
              }}
              style={styles.imageStyle}
            />
          ) : (
            <Text style={styles.thumbName}>{item?.thumbName}</Text>
          )}
        </View>
        <Text style={styles.nameTextStyle}>{item?.name}</Text>
      </TouchableOpacity>
    );
  };

  const renderFooter = () => {
    return (
      <Button
        height={45}
        width={200}
        borderRadius={8}
        title="Logout"
        textColor={Colors.white}
        onClick={() => {}}
        backgroundColor={Colors.secondary}
      />
    );
  };

  return (
    <SafeAreaView style={styles.ScreenContainer}>
      <View style={styles.screenAlign}>
        <FlatList
          data={data}
          renderItem={({item, index}) => renderItem(item, index)}
          ListFooterComponent={renderFooter}
          ListFooterComponentStyle={styles.footerStyle}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
