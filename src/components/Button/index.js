import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';
const Button = ({title, onPress, style}) => {
  const handlePress = () => {
    console.log('Clicked');
  };
  return (
    <TouchableOpacity
      activeOpacity="0.6"
      onPress={onPress}
      style={[styles.container, style]}>
      <Text style={[styles.textContent]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default React.memo(Button);
