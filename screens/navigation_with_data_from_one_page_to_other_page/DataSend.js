import {View, Text, Button, Alert} from 'react-native';
import React from 'react';

const DataSend = ({navigation}) => {
  const dataToSend = 'Hello from DataSend Screen';

  return (
    <View>
      <Text>DataSend</Text>
      <Button
        title="Go To Receive Page"
        onPress={() => navigation.navigate('DataReceive', {data: dataToSend})}
      />
    </View>
  );
};

export default DataSend;
