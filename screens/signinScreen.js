import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { Auth } from 'aws-amplify';

state = {
  username: '',
  password: ''
};

function onChangeText(key, value) {
  state[key] = value;
}

export default function SignInScreen({ navigation, screenProps }) {
  const pressHandler = () => {
    navigation.navigate('SignUpScreen');
  }

  const signIn = () => {
    const { username, password } = state;
    
    Auth.signIn(username, password)
      .catch(err => console.log('error signing in!: ', err));
    
    screenProps.authenticate(true);
    console.log("successful")
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="uniqname"
        onChangeText={value => onChangeText("username", value)}
      />
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        placeholder="password"
        onChangeText={value => onChangeText("password", value)}
      />
      <Button 
        title="Sign In" 
        onPress={signIn}
      />
      <Text style={styles.text}>{"\n\n\n\n"}Haven't registered yet?</Text>
      <Button
        title="Sign Up"
        onPress={pressHandler}
      />
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
