import {View, Text} from 'react-native';
import React from 'react';

const DataReceive = ({route}) => {
  const receivedData = route.params?.data || 'Default Value';

  return (
    <View>
      <Text>DataReceive</Text>
      <Text>Received Data: {receivedData}</Text>
    </View>
  );
};

export default DataReceive;
