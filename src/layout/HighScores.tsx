import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import moment from 'moment';
import { useHighscores } from '../contexts/HighscoresContext';
import { IHighscore } from './types';

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f9c2ff',
  },
  title: { fontSize: 24 },
  score: { fontSize: 16 },
});

const Item = ({ date, score }: IHighscore) => (
  <View style={styles.item}>
    <Text style={styles.title}>{moment(date).format('DD/MM/YYYY HH:mm')}</Text>
    <Text style={styles.score}>{score} points</Text>
  </View>
);

export default () => {
  const { highscores } = useHighscores();

  return (
    <FlatList
      data={highscores.sort((a, b) => b.score - a.score)}
      renderItem={({ item }) => <Item {...item} />}
      keyExtractor={(item, i) =>
        `${moment(item.date).format('DD/MM/YYYY')}-${i}`
      }
    />
  );
};
