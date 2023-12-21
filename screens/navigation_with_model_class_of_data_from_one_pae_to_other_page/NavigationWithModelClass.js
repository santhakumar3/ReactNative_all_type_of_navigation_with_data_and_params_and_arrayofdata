import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SendModelClassData from './SendModelClassData';
import ReceiveModelClassData from './ReceiveModelClassData';

const Stack = createNativeStackNavigator();

function AppWithModelClassData() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SendWithStaticCustomData">
        <Stack.Screen
          name="SendModelClassData"
          component={SendModelClassData}
        />
        <Stack.Screen
          name="ReceiveModelClassData"
          component={ReceiveModelClassData}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppWithModelClassData;
