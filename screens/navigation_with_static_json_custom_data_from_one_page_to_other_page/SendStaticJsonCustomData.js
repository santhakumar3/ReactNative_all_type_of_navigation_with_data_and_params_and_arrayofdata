import React from 'react';
import {View, Button} from 'react-native';

const SendStaticJsonCustomData = ({navigation}) => {
  const productList = [
    {
      id: 1,
      name: 'Product A',
      price: 19.99,
      description: 'A wonderful product',
    },
    {
      id: 2,
      name: 'Product B',
      price: 29.99,
      description: 'Another amazing product',
    },
    // Add more products as needed
  ];

  return (
    <View>
      <Button
        title="Go to SecondPage"
        onPress={() =>
          navigation.navigate('ReceiveStaticJsonCustomData', {productList})
        }
      />
    </View>
  );
};

export default SendStaticJsonCustomData;
