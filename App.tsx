import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {AuthNavigator} from './src/navigation/AuthNavigator';

const App = (): JSX.Element => {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
};

export default App;
