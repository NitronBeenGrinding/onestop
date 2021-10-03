import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function BrowseScreen() {
  return (
    <View style={styles.container}>
      <Text>OneStop Ticket Exchange.</Text>
      <Button
        onPress={() => {
          alert('test!');
        }}
        title="Browse Screen!"
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
