import React from 'react';
import {View, Image, Button} from 'react-native';

const SendImageUrl = ({navigation}) => {
  const imageUri =
    'https://housing.com/news/wp-content/uploads/2023/07/Sundar-Pichais-House-300x200-compressed.jpg'; // Replace with your image URI

  return (
    <View>
      <Image source={{uri: imageUri}} style={{width: 200, height: 200}} />
      <Button
        title="Go to ReceiveImageUrl"
        onPress={() => navigation.navigate('ReceiveImage', {imageUri})}
      />
    </View>
  );
};

export default SendImageUrl;
