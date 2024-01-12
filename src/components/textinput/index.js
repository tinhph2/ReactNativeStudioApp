import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import {styles} from './styles';

const ViewComponent = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          value={name}
          onChangeText={setName}
          placeholder="Enter name"
          style={styles.input}></TextInput>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          value={name}
          onChangeText={setName}
          placeholder="Enter name"
          style={styles.input}></TextInput>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.baseText}>
          Em vao doi bang{' '}
          <Text style={[styles.boldText, styles.colorText]}>Vang do</Text>
        </Text>
      </View>
    </View>
  );
};
export default ViewComponent;
