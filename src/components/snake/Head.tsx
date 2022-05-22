import React from 'react';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  head: {
    position: 'absolute',
    backgroundColor: 'black',
    flex: 1,
  },
});

export default () => {
  return <View style={[styles.head, { top: 30 }]} />;
};
