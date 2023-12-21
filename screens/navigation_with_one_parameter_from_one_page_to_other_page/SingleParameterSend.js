import React from 'react';
import {View, Text, Button} from 'react-native';

const SingleParameterSend = ({navigation}) => {
  const parameterToSend = 'Hello from FirstPage!123';

  return (
    <View>
      <Text>SingleParameterSend</Text>
      <Button
        title="Go to SecondPage"
        onPress={() =>
          navigation.navigate('SecondPage', {parameter: parameterToSend})
        }
      />
    </View>
  );
};

export default SingleParameterSend;
