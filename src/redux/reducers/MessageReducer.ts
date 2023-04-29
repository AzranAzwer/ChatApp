import {
  T_ChatDataType,
  T_UserActionTypes,
  UserDispatchTypes,
} from '../action/ActionTypes';

const messageList = [
  {sender: 'Alex', message: 'Hey there!', time: '6:01 PM'},
  {
    sender: 'Bob',
    message: 'Hello, how are you doing?',
    time: '6:02 PM',
  },
  {sender: 'Alex', message: 'Hey there!', time: '6:01 PM'},
  {
    sender: 'Bob',
    message: 'Hello, how are you doing?',
    time: '6:02 PM',
  },
  {sender: 'Alex', message: 'Hey there!', time: '6:01 PM'},
  {
    sender: 'Bob',
    message: 'Hello, how are you doing?',
    time: '6:02 PM',
  },
  {
    sender: 'Alex',
    message: 'I am good, how about you?',
    time: '6:02 PM',
  },
  {
    sender: 'Alex',
    message: '😊😇',
    time: '6:02 PM',
  },
  {
    sender: 'Bob',
    message: "Can't wait to meet you.",
    time: '6:03 PM',
  },
  {
    sender: 'Alex',
    message: "That's great, when are you coming?",
    time: '6:03 PM',
  },
  {
    sender: 'Bob',
    message: 'This weekend.',
    time: '6:03 PM',
  },
  {
    sender: 'Bob',
    message: 'Around 4 to 6 PM.',
    time: '6:04 PM',
  },
  {
    sender: 'Alex',
    message: "Great, don't forget to bring me some mangoes.",
    time: '6:05 PM',
  },
  {
    sender: 'Bob',
    message: 'Sure!',
    time: '6:05 PM',
  },
];

export interface I_MessageState {
  isLoading: boolean;
  messages: T_ChatDataType[];
}

const defaultState: I_MessageState = {
  isLoading: false,
  messages: messageList,
};

const reducer = (
  state: I_MessageState = defaultState,
  action: UserDispatchTypes,
): I_MessageState => {
  switch (action.type) {
    case T_UserActionTypes.SEND_MESSAGE_EXECUTE: {
      return {...state, isLoading: true};
    }
    case T_UserActionTypes.SEND_MESSAGE_SUCCESS: {
      const {payload} = action;
      return {
        ...state,
        isLoading: false,
        messages: [...state.messages, payload],
      };
    }
    case T_UserActionTypes.SEND_MESSAGE_FAILED: {
    }

    default:
      return state;
  }
};

export default reducer;
