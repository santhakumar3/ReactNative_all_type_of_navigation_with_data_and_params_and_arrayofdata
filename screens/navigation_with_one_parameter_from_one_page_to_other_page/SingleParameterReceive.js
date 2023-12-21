import React from 'react';
import {View, Text} from 'react-native';

const SingleParameterReceive = ({route}) => {
  const {parameter} = route.params;

  return (
    <View>
      <Text>{parameter}</Text>
    </View>
  );
};

export default SingleParameterReceive;
