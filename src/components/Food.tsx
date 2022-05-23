import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  square: {
    borderColor: 'green',
    borderWidth: 0.5,
    flex: 1,
  },
  food: {
    height: 30,
    width: 30,
    alignSelf: 'center',
  },
});

export default () => {
  return (
    <View style={styles.square}>
      <Image
        source={require('../assets/png/hamburger.png')}
        style={styles.food}
      />
    </View>
  );
};
