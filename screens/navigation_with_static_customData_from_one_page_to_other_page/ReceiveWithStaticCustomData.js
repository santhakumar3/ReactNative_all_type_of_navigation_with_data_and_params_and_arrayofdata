import React from 'react';
import {View, Text} from 'react-native';

const ReceiveWithStaticCustomData = ({route}) => {
  const {customData} = route.params;

  return (
    <View>
      {customData.map(item => (
        <View key={item.id}>
          <Text>Name: {item.name}</Text>
          <Text>Description: {item.description}</Text>
        </View>
      ))}
    </View>
  );
};

export default ReceiveWithStaticCustomData;
