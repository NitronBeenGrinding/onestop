import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen({ navigation }) {
  const pressHendler = () => {
    navigation.navigate('BrowseScreen');
  }

  return (
    <View style={styles.container}>
      <Text>OneStop Ticket Exchange.</Text>
      <Button
        onPress={pressHendler}
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
