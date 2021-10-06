import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { ListItem, Icon } from 'react-native-elements'

const footballGames = [
  {
    opponent: "Northwestern",
    date: "10-23-2021"
  },
  {
    opponent: "Indiana",
    date: "11-06-2021"
  },
  {
    opponent: "Ohio State",
    date: "11-27-2021"
  }
]

const basketballGames = [
  {
    opponent: "Buffalo",
    date: "11-10-2021"
  },
  {
    opponent: "Seton Hall",
    date: "11-16-2021"
  },
  {
    opponent: "Tarleton State",
    date: "11-27-2021"
  }
]

const mapGamesToSport = {
  Basketball: basketballGames,
  Football: footballGames
}

export default function GameScreen({ navigation }) {
  const sportNeeded = navigation.getParam('sportNeeded') ;

  const pressHandler = () => {
    navigation.navigate('TicketScreen');
  }

  return (
    <View>
      {
        mapGamesToSport[sportNeeded].map((l, i) => (
          <ListItem key={i} onPress={pressHandler} bottomDivider>
            <ListItem.Content>
              <ListItem.Title>{l.opponent}</ListItem.Title>
              <ListItem.Subtitle>{l.date}</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        ))
      }
    </View>
  );
}
