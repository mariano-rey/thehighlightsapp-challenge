import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RestartButton from '../components/UI/RestartButton';
import { usePoints } from '../contexts/PointsContext';

const styles = StyleSheet.create({
  container: { padding: 16 },
  points: {
    height: 36,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: { fontSize: 24 },
  divider: {
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginTop: 8,
  },
});

export default () => {
  const { points } = usePoints();

  return (
    <View style={styles.container}>
      <View style={styles.points}>
        <Text style={styles.title}>Points: {points}</Text>
        <RestartButton />
      </View>
      <View style={styles.divider} />
    </View>
  );
};
