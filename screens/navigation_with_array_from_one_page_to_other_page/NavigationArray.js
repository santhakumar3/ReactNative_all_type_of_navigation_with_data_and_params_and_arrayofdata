import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SendArray from './SendArray';
import ReceivedArray from './ReceiveArray';

const Stack = createNativeStackNavigator();

function AppArray() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Screen1">
        <Stack.Screen name="SendArray" component={SendArray} />
        <Stack.Screen name="ReceiveArray" component={ReceivedArray} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppArray;
