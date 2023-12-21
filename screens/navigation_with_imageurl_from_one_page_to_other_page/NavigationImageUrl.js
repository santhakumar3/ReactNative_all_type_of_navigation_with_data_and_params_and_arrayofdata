import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SendImageUrl from './SendImageUrl';
import ReceiveImageUrl from './ReceiveImageUrl';

const Stack = createNativeStackNavigator();

function AppWithImageUrl() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FirstPage">
        <Stack.Screen name="SendImage" component={SendImageUrl} />
        <Stack.Screen name="ReceiveImage" component={ReceiveImageUrl} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppWithImageUrl;
