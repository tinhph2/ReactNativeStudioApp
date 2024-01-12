import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 24,
    flexDirection: 'column',
    alignItems: 'center',
  },
  textContainer: {
    backgroundColor: 'blue',
    width: '90%',
    alignSelf: 'center',
    marginTop: 20,
  },
  baseText: {
    fontFamily: 'Cochin',
    color: 'white',
    fontSize: 16,
    margin: 10,
  },
  boldText: {
    fontWeight: 'bold',
  },
  colorText: {
    color: 'red',
  },

  inputContainer: {
    borderWidth: 1,
    borderColor: '#8D9BB5',
    borderRadius: 14,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    flex: 1,
  },
});
