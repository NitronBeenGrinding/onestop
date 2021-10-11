import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { Auth } from 'aws-amplify';

state = {
  uniqname: '',
  password: '',
  confirmationCode: '',
};

function onChangeText(key, value) {
  state[key] = value;
}

function signUp() {
  Auth.signUp({
    username: state[username],
    password: state[password],
    attributes: {
      email: state[username] + "@umich.edu"
    },
  })
    .then(() => console.log('successful sign up!'))
    .catch(err => console.log('error signing up!: ', err));
}
function confirmSignUp() {
  Auth.confirmSignUp(state[username], state[confirmationCode])
    .then(() => console.log('successful confirm sign up!'))
    .catch(err => console.log('error confirming signing up!: ', err));
}

export default function SignUpScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="uniqname"
        onChangeText={onChangeText("uniqname", value)}
      />
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        placeholder="password"
        onChangeText={onChangeText("password", value)}
      />
      <Button title="Sign Up" onPress={signUp} />
      <TextInput
        style={styles.input}
        placeholder="confirmation code"
        onChangeText={onChangeText("confirmationCode", value)}
      />
      <Button title="Confirm Sign Up" onPress={confirmSignUp} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  input: {
    height: 50,
    borderBottomWidth: 2,
    borderBottomColor: '#2196F3',
    margin: 10,
  },
  text: {
    textAlign: 'center',
  },
});
