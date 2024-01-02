import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {styles} from './styles';

const Checkbox = ({checked, onCheck}) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => onCheck(!checked)}
      style={styles.container}>
      {checked ? (
        <View style={styles.innerContainer}>
          <Image
            style={styles.checkIcon}
            source={require('../../assets/icon_check.png')}></Image>
        </View>
      ) : null}
    </TouchableOpacity>
  );
};
export default React.memo(Checkbox);
