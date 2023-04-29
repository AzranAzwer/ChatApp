import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {AuthNavigator} from './src/navigation/AuthNavigator';
import {Provider} from 'react-redux';
import store from './src/redux/Store';

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AuthNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
