import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SendStaticJsonCustomData from './SendStaticJsonCustomData';
import ReceiveStaticJsonCustomData from './ReceiveStaticJsonCustomData';

const Stack = createNativeStackNavigator();

function AppWithStaticJsonCustomData() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SendWithStaticCustomData">
        <Stack.Screen
          name="SendStaticJsonCustomData"
          component={SendStaticJsonCustomData}
        />
        <Stack.Screen
          name="ReceiveStaticJsonCustomData"
          component={ReceiveStaticJsonCustomData}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppWithStaticJsonCustomData;
