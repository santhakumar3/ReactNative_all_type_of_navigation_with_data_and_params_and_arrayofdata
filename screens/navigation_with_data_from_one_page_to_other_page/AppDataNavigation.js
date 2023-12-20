import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DataSend from './DataSend';
import DataReceive from './DataReceive';
import * as React from 'react';

const Stack = createNativeStackNavigator();

function AppData() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="DataSend">
        <Stack.Screen name="DataSend" component={DataSend} />
        <Stack.Screen name="DataReceive" component={DataReceive} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppData;
