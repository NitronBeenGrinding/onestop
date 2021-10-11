import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { withAuthenticator } from 'aws-amplify-react-native'
import Amplify, { Auth } from 'aws-amplify';

export default function HomeScreen({ navigation }) {
  const pressHandler = () => {
    navigation.navigate('BrowseScreen');
  }

  return (
    <View style={styles.container}>
      <Text>Hello {Auth.user.username}!</Text>
      <Button
        onPress={pressHandler}
        title="Home Screen!"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
