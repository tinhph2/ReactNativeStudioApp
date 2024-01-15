import {Dimensions, StyleSheet} from 'react-native';
const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    margin: 8,
  },
  title: {
    color: '#606060',
    paddingVertical: 8,
  },
  image: {
    width: (width - 64) / 2,
    height: 220,
    borderRadius: 8,
  },
  price: {
    color: '#000000',
    paddingBottom: 8,
  },
});
