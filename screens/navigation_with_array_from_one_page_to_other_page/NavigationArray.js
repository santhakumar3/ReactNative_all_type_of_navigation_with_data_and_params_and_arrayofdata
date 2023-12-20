import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SendArray from './SendArray';
import ReceiveArray from './ReceiveArray';

const Stack = createNativeStackNavigator();

function ArraySend() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SendArray">
        <Stack.Screen name="SendArray" component={SendArray} />
        <Stack.Screen name="ReceiveArray" component={ReceiveArray} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default ArraySend;
