/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Dimensions,
  FlatList,
  Keyboard,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {styles} from './MessageScreen.style';
import {Colors} from '../../utils/assets/Colors';
import {useDispatch, useSelector} from 'react-redux';
import {GetCurrentUser} from '../../redux/selectors/UserSelectors';
import {GetMessages} from '../../redux/selectors/MessageSelectors';
import {sendMesage} from '../../redux/action/MessageAction';

export interface T_ChatDataType {
  message: string;
  sender: string;
  time: string;
}

const MessageScreen = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(GetCurrentUser());
  const messageList = useSelector(GetMessages());
  const [inputMessage, setInputMessage] = useState('');

  const getTime = (date: Date) => {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  };

  const sendMessage = () => {
    if (inputMessage === '') {
      return setInputMessage('');
    }
    let t = getTime(new Date());
    if (currentUser.username && inputMessage && t) {
      dispatch(
        sendMesage({
          sender: currentUser.username,
          message: inputMessage,
          time: t,
        }) as any,
      );
      setInputMessage('');
    }
  };

  const renderItem = (item: T_ChatDataType) => {
    return (
      <TouchableWithoutFeedback>
        <View style={styles.chatBottomStyle}>
          <View
            style={{
              maxWidth: Dimensions.get('screen').width * 0.8,
              marginHorizontal: 10,
              padding: 10,
              borderRadius: 8,
              backgroundColor:
                item.sender === currentUser.username
                  ? Colors.primary
                  : '#36454F',
              alignSelf:
                item.sender === currentUser.username
                  ? 'flex-end'
                  : 'flex-start',
              borderBottomLeftRadius:
                item.sender === currentUser.username ? 8 : 0,
              borderBottomRightRadius:
                item.sender === currentUser.username ? 0 : 8,
            }}>
            <Text
              style={{
                color:
                  item.sender === currentUser.username
                    ? Colors.white
                    : Colors.white,
                fontSize: 16,
              }}>
              {item.message}
            </Text>
            <Text
              style={{
                color:
                  item.sender === currentUser.username ? '#D3D3D3' : '#D3D3D3',
                fontSize: 14,
                alignSelf:
                  item.sender === currentUser.username
                    ? 'flex-end'
                    : 'flex-start',
              }}>
              {item.time}
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.ScreenContainer}>
        <FlatList
          style={{backgroundColor: Colors.white}}
          inverted={true}
          data={JSON.parse(JSON.stringify(messageList)).reverse()}
          renderItem={({item}) => renderItem(item)}
        />
        <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={110}>
          <View style={styles.textBoxContainer}>
            <TextInput
              defaultValue={inputMessage}
              style={styles.textinput}
              multiline={true}
              placeholder="Message"
              onChangeText={text => setInputMessage(text)}
              onSubmitEditing={() => {
                sendMessage();
              }}
            />
            <TouchableOpacity
              style={styles.messageSend}
              onPress={() => {
                sendMessage();
              }}>
              <Text style={{color: Colors.white}}>Send</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default MessageScreen;
