import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

export type RootNavigatorParamList = {
  Home: undefined;
};

const {Stack, Screen} = createNativeStackNavigator<RootNavigatorParamList>();

export const RootNavigator = () => {
  <Stack>
    <Screen name="Home" component={HomeScreen} />
  </Stack>;
};
