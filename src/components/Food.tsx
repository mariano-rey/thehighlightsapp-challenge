import React from 'react';
import { Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  food: {
    height: 30,
    width: 30,
    alignSelf: 'center',
  },
});

export default () => {
  return (
    <Image
      source={require('../assets/png/hamburger.png')}
      style={styles.food}
    />
  );
};
