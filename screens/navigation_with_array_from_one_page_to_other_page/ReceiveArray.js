import {View, Text, Button} from 'react-native';
import React from 'react';

const ReceiveArray = ({route, navigation}) => {
  const {dataArray} = route.params;
  return (
    <View>
      <Text>ReceiveArray</Text>
      {/* Display the data from the array */}
      <Text>Received Array: {JSON.stringify(dataArray)}</Text>
      <Button title="Go back to Home" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default ReceiveArray;
