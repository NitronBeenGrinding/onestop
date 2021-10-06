import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function TicketScreen({ navigation }) {
  const sportNeeded = navigation.getParam('sportNeeded') ;

  return (
    <View style={styles.container}>
      <Text>{sportNeeded}</Text>
      <Button
        onPress={() => {
          alert('test!');
        }}
        title={"JSON.stringify(sportNeeded)"}
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
