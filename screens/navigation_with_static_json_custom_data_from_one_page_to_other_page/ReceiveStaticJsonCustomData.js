import React from 'react';
import {View, Text} from 'react-native';

const ReceiveStaticJsonCustomData = ({route}) => {
  const {productList} = route.params;

  return (
    <View>
      {productList.map(product => (
        <View key={product.id}>
          <Text>Name: {product.name}</Text>
          <Text>Price: ${product.price}</Text>
          <Text>Description: {product.description}</Text>
          <Text>--------------------------</Text>
        </View>
      ))}
    </View>
  );
};

export default ReceiveStaticJsonCustomData;
