import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home/containers/Home';
import {RootNavigatorParamList} from './types';

const {Navigator, Screen} =
  createNativeStackNavigator<RootNavigatorParamList>();

export const RootNavigator = () => {
  return (
    <Navigator>
      <Screen name="Home" component={HomeScreen} />
    </Navigator>
  );
};
