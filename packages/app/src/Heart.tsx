import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Heart = ({ color, width, height, onPress }) => (
  <TouchableOpacity onPress={onPress} style={{ height, width }}>
    <Text>CLICK</Text>

  </TouchableOpacity>
);

export default Heart;
