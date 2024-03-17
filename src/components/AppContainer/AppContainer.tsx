import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

const AppContainer: React.FC<React.PropsWithChildren> = ({children}) => {
  return <NavigationContainer>{children}</NavigationContainer>;
};

export default AppContainer;
