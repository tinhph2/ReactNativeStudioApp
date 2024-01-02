import React, {useState} from 'react';
import {Text, Image, View, Pressable} from 'react-native';
import {styles} from './styles';
import AuthHeader from '../../../components/AuthHeader';
import Input from '../../../components/Input';
import Checkbox from '../../../components/Checkbox';
import Button from '../../../components/Button';
import Seperator from '../../../components/Seperator';
import GoogleLogin from '../../../components/GoogleLogin';

const SignUp = () => {
  const [checked, setChecked] = useState(false);
  const onSignIn = () => {
    console.log('Test Sign in');
  };
  return (
    <View style={styles.container}>
      <AuthHeader title="Sign Up" />
      <Input label="Name" placeholder="Example Jonh" />
      <Input label="Email" placeholder="example@gmail.com" />
      <Input isPassword label="Password" placeholder="******" />
      <View style={styles.checkRow}>
        <Checkbox checked={checked} onCheck={setChecked}></Checkbox>
        <Text style={styles.checkText}>I agree with Terms & Privacy</Text>
      </View>
      <Button style={styles.button} title="Sign Up"></Button>
      <Seperator text="Or sign up with"></Seperator>
      <GoogleLogin></GoogleLogin>

      <Text style={styles.footerText}>
        Already have an account?
        <Text onPress={onSignIn} style={styles.footerLink}>
          Sign In
        </Text>
      </Text>
    </View>
  );
};

export default SignUp;
