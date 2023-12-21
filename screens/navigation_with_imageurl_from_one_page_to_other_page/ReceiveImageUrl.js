import React from 'react';
import {View, Image} from 'react-native';

const ReceiveImageUrl = ({route}) => {
  const {imageUri} = route.params;

  return (
    <View>
      <Image source={{uri: imageUri}} style={{width: 200, height: 200}} />
    </View>
  );
};

export default ReceiveImageUrl;
