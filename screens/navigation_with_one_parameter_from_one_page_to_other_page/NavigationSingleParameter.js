import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SingleParameterSend from './SingleParameterSend';
import SingleParameterReceive from './SingleParameterReceive';

const Stack = createNativeStackNavigator();

function AppWithParams() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FirstPage">
        <Stack.Screen name="FirstPage" component={SingleParameterSend} />
        <Stack.Screen name="SecondPage" component={SingleParameterReceive} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppWithParams;
