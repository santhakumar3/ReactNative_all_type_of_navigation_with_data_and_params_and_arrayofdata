import {View, Text, Button} from 'react-native';
import React from 'react';

const SendArray = ({navigation}) => {
  const arrayToSend = [1, 2, 3, 4, 5];

  return (
    <View>
      <Text>SendArray</Text>
      <Button
        title="Go To Array Receive page"
        onPress={() => navigation.navigate('ReceiveArray', {data: arrayToSend})}
      />
    </View>
  );
};

export default SendArray;
