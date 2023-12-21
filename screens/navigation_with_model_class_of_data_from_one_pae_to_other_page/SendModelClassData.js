import React from 'react';
import {View, Button} from 'react-native';
import Product from './Product'; // Import the Product model

const SendModelClassData = ({navigation}) => {
  const productList = [
    new Product(1, 'Product A1111', 19.99, 'A wonderful product'),
    new Product(2, 'Product B', 29.99, 'Another amazing product'),
    // Add more products as needed
  ];

  return (
    <View>
      <Button
        title="Go to SecondPage"
        onPress={() =>
          navigation.navigate('ReceiveModelClassData', {productList})
        }
      />
    </View>
  );
};

export default SendModelClassData;
