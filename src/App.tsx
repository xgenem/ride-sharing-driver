import React from 'react';
import {Text, View} from 'react-native';
import {RootNavigator} from './navigation/RootNavigator';
import {AppContainer} from './components';

const App = () => {
  return (
    <AppContainer>
      <RootNavigator />
    </AppContainer>
  );
};

export default App;
