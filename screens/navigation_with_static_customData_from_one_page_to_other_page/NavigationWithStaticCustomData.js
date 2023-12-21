import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import SendWithStaticCustomData from './SendWithStaticCustomData';
import ReceiveWithStaticCustomData from './ReceiveWithStaticCustomData';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function AppWithStaticCustomData() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SendWithStaticCustomData">
        <Stack.Screen
          name="SendWithStaticCustomData"
          component={SendWithStaticCustomData}
        />
        <Stack.Screen
          name="ReceiveWithStaticCustomData"
          component={ReceiveWithStaticCustomData}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppWithStaticCustomData;
