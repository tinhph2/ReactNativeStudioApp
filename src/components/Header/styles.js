import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {
    paddingTop:10,
    paddingBottom:0,
    paddingLeft:24,
    paddingRight:24
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  title: {
    color: '#303030',
    fontSize: 16,
    fontWeight: 'bold',
  },
  icon: {
    width: 24,
    height: 24,
  },
  space: {
    width: 15,
  },
});
