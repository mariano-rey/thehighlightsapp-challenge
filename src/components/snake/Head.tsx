import React from 'react';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  head: {
    // position: 'absolute',
    backgroundColor: 'black',
    // minWidth: 30,
    flex: 1,
    height: 30,
  },
});

export default () => {
  return <View style={styles.head} />;
};
