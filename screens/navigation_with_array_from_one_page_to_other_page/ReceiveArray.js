import React from 'react';
import {View, Text} from 'react-native';

const ReceivedArray = ({route}) => {
  const {dataArray} = route.params;

  // Use the dataArray in your second screen

  return (
    <View>
      <Text>ReceiveArray</Text>
      <Text>Data from SendArray: {JSON.stringify(dataArray)}</Text>
    </View>
  );
};

export default ReceivedArray;
