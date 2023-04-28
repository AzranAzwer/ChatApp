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

export interface T_ChatDataType {
  message: string;
  sender: string;
  receiver?: string;
  time?: string;
  name: string;
}

const MessageScreen = () => {
  const [currentUser] = useState({
    name: 'John Doe',
  });

  const [inputMessage, setInputMessage] = useState('');

  const [messages, setMessages] = useState([
    {sender: 'John Doe', message: 'Hey there!', time: '6:01 PM'},
    {
      sender: 'Robert Henry',
      message: 'Hello, how are you doing?',
      time: '6:02 PM',
    },
    {sender: 'John Doe', message: 'Hey there!', time: '6:01 PM'},
    {
      sender: 'Robert Henry',
      message: 'Hello, how are you doing?',
      time: '6:02 PM',
    },
    {sender: 'John Doe', message: 'Hey there!', time: '6:01 PM'},
    {
      sender: 'Robert Henry',
      message: 'Hello, how are you doing?',
      time: '6:02 PM',
    },
    {
      sender: 'John Doe',
      message: 'I am good, how about you?',
      time: '6:02 PM',
    },
    {
      sender: 'John Doe',
      message: '😊😇',
      time: '6:02 PM',
    },
    {
      sender: 'Robert Henry',
      message: "Can't wait to meet you.",
      time: '6:03 PM',
    },
    {
      sender: 'John Doe',
      message: "That's great, when are you coming?",
      time: '6:03 PM',
    },
    {
      sender: 'Robert Henry',
      message: 'This weekend.',
      time: '6:03 PM',
    },
    {
      sender: 'Robert Henry',
      message: 'Around 4 to 6 PM.',
      time: '6:04 PM',
    },
    {
      sender: 'John Doe',
      message: "Great, don't forget to bring me some mangoes.",
      time: '6:05 PM',
    },
    {
      sender: 'Robert Henry',
      message: 'Sure!',
      time: '6:05 PM',
    },
  ]);

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
    setMessages([
      ...messages,
      {
        sender: currentUser.name,
        message: inputMessage,
        time: t,
      },
    ]);
    setInputMessage('');
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.ScreenContainer}>
        <FlatList
          style={{backgroundColor: Colors.white}}
          inverted={true}
          data={JSON.parse(JSON.stringify(messages)).reverse()}
          renderItem={({item}) => (
            <TouchableWithoutFeedback>
              <View style={styles.chatBottomStyle}>
                <View
                  style={{
                    maxWidth: Dimensions.get('screen').width * 0.8,
                    marginHorizontal: 10,
                    padding: 10,
                    borderRadius: 8,
                    backgroundColor:
                      item.sender === currentUser.name
                        ? Colors.primary
                        : '#36454F',
                    alignSelf:
                      item.sender === currentUser.name
                        ? 'flex-end'
                        : 'flex-start',
                    borderBottomLeftRadius:
                      item.sender === currentUser.name ? 8 : 0,
                    borderBottomRightRadius:
                      item.sender === currentUser.name ? 0 : 8,
                  }}>
                  <Text
                    style={{
                      color:
                        item.sender === currentUser.name
                          ? Colors.white
                          : Colors.white,
                      fontSize: 16,
                    }}>
                    {item.message}
                  </Text>
                  <Text
                    style={{
                      color:
                        item.sender === currentUser.name
                          ? '#D3D3D3'
                          : '#D3D3D3',
                      fontSize: 14,
                      alignSelf:
                        item.sender === currentUser.name
                          ? 'flex-end'
                          : 'flex-start',
                    }}>
                    {item.time}
                  </Text>
                </View>
              </View>
            </TouchableWithoutFeedback>
          )}
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
