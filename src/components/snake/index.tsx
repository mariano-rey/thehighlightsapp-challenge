import React from 'react';
import { StyleProp, StyleSheet, ViewStyle } from 'react-native';
import Animated, {
  SharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import { usePoints } from '../../contexts/PointsContext';
import { IDirection, ISnakePosition } from '../../layout/types';

interface Props {
  direction: IDirection;
  snakePosition: SharedValue<ISnakePosition>;
}

const styles = StyleSheet.create({
  head: {
    backgroundColor: 'black',
    position: 'absolute',
    height: 35,
    width: 35,
  },
});

export default ({ direction, snakePosition }: Props) => {
  const { points } = usePoints();

  const springStyles = useAnimatedStyle(() => ({
    top: withTiming(snakePosition.value.top),
    left: withTiming(snakePosition.value.left),
  }));

  const renderBorder = (): StyleProp<ViewStyle> => {
    const borderWidth = 20;
    if (direction === 'left') {
      return {
        borderTopLeftRadius: borderWidth,
        borderBottomLeftRadius: borderWidth,
      };
    } else if (direction === 'right') {
      return {
        borderTopRightRadius: borderWidth,
        borderBottomRightRadius: borderWidth,
      };
    } else if (direction === 'top') {
      return {
        borderTopLeftRadius: borderWidth,
        borderTopRightRadius: borderWidth,
      };
    } else {
      return {
        borderBottomLeftRadius: borderWidth,
        borderBottomRightRadius: borderWidth,
      };
    }
  };

  return <Animated.View style={[styles.head, renderBorder(), springStyles]} />;
};
