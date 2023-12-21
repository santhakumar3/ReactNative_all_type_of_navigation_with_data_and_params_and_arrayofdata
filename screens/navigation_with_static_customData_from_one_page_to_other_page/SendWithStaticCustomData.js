import React from 'react';
import {View, Button} from 'react-native';

const SendWithStaticCustomData = ({navigation}) => {
  const customData = [
    {id: 1, name: 'Item 1', description: 'Description 1'},
    {id: 2, name: 'Item 2', description: 'Description 2'},
    // Add more items as needed
  ];

  return (
    <View>
      <Button
        title="Go to SecondPage"
        onPress={() =>
          navigation.navigate('ReceiveWithStaticCustomData', {customData})
        }
      />
    </View>
  );
};

export default SendWithStaticCustomData;
