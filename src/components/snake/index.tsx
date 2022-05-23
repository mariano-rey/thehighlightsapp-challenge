import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { usePoints } from '../../contexts/PointsContext';
import { IDirection } from '../../layout/Body';
import Head from './Head';

interface Props {
  direction: IDirection;
  setPosition: React.Dispatch<React.SetStateAction<[number, number]>>;
}

const styles = StyleSheet.create({
  square: {
    borderColor: 'green',
    borderWidth: 0.5,
    flex: 1,
  },
  head: {
    backgroundColor: 'black',
    flex: 1,
  },
});

export default ({ direction, setPosition }: Props) => {
  const { points } = usePoints();

  const renderBorder = (): StyleProp<ViewStyle> => {
    if (direction === 'left') {
      return { borderTopLeftRadius: 16, borderBottomLeftRadius: 16 };
    } else if (direction === 'right') {
      return { borderTopRightRadius: 16, borderBottomRightRadius: 16 };
    } else if (direction === 'top') {
      return { borderTopLeftRadius: 16, borderTopRightRadius: 16 };
    } else {
      return { borderBottomLeftRadius: 16, borderBottomRightRadius: 16 };
    }
  };

  return (
    <View style={styles.square}>
      <View style={[styles.head, renderBorder()]} />
    </View>
  );
};
