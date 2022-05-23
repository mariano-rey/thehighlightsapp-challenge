import React from 'react';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  head: {
    backgroundColor: 'black',
    flex: 1,
    borderRadius: 16,
  },
});

export default () => {
  return <View style={styles.head} />;
};
