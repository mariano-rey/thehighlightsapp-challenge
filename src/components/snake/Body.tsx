import React from 'react';
import { StyleProp, StyleSheet, ViewStyle } from 'react-native';
import Animated, {
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import { ISnake } from './types';

type Props = ISnake & { position: number };

const styles = StyleSheet.create({
  body: {
    height: 35,
    width: 35,
    backgroundColor: 'black',
    position: 'absolute',
  },
});

export default ({ direction, position, snakePosition }: Props) => {
  const springStyles = useAnimatedStyle(() => ({
    top: withTiming(snakePosition.value[position].top),
    left: withTiming(snakePosition.value[position].left),
  }));

  const renderBorder = (): StyleProp<ViewStyle> => {
    if (!direction) {
      return {};
    }

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

  return <Animated.View style={[styles.body, renderBorder(), springStyles]} />;
};
