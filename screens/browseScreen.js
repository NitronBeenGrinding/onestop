import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Card, ListItem, Icon } from 'react-native-elements'

const list = [
  {
    name: 'Basketball',
    icon: 'basketball-outline'
  },
  {
    name: 'Football',
    icon: 'american-football-outline'
  }
]

export default function BrowseScreen() {
  return (
    <View>
      {
        list.map((l, i) => (
          <ListItem key={i} bottomDivider>
          <Icon name={l.icon} type="ionicon"></Icon>
            <ListItem.Content>
              <ListItem.Title>{l.name}</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        ))
      }
    </View>
  );
}
