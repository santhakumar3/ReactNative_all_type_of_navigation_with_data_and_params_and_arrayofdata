import {View, Text, Button} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

function FirstPageWithoutNavigationContainer() {
  const navigation = useNavigation();

  const navigationToSecondPage = () => {
    navigation.navigate('SecondPage');
  };

  return (
    <View>
      <Text>FirstPageWithoutNavigationContainer</Text>
      <Button title="Go to Next Page" onPress={{navigationToSecondPage}} />
    </View>
  );
}

export default FirstPageWithoutNavigationContainer;
