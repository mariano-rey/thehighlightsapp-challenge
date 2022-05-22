import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

interface Props {
  points: number;
}

const styles = StyleSheet.create({
  container: {
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
    marginBottom: 8,
  },
});

export default ({ points }: Props) => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.title}>Points: {points}</Text>
        <Button title="Restart" />
      </View>
      <View style={styles.divider} />
    </View>
  );
};
