import React from 'react';
import {View, Text, Button} from 'react-native';

const SendArray = ({navigation}) => {
  const dataArray = [1, 2, 3, 4, 5]; // Your array of data

  return (
    <View>
      <Text>Send Array</Text>
      <Button
        title="Go to Receive Array "
        onPress={() => navigation.navigate('ReceiveArray', {dataArray})}
      />
    </View>
  );
};

export default SendArray;
