import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import AppNavigator from './routes/appStack';
import AuthNavigator from './routes/authStack';
import Amplify from 'aws-amplify';
import awsconfig from './src/aws-exports';
Amplify.configure(awsconfig);

export default class App extends Component {
  state = {
    authenticated: false
  }

  isAuthenticate = authenticated => {
    this.setState({ authenticated });
    console.log("authenticate: ", authenticated);
  }

  render() {
    if (this.state.authenticated) {
      return (
        <AppNavigator />
      );
    }
    return (
      <AuthNavigator
        screenProps={{
          authenticate: this.isAuthenticate,
        }}
      />
    )
  }
}
