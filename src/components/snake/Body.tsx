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
    backgroundColor: 'lightgreen',
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
    let headStyle = {};
    if (direction === 'left') {
      headStyle = {
        borderTopLeftRadius: borderWidth,
        borderBottomLeftRadius: borderWidth,
      };
    } else if (direction === 'right') {
      headStyle = {
        borderTopRightRadius: borderWidth,
        borderBottomRightRadius: borderWidth,
      };
    } else if (direction === 'top') {
      headStyle = {
        borderTopLeftRadius: borderWidth,
        borderTopRightRadius: borderWidth,
      };
    } else {
      headStyle = {
        borderBottomLeftRadius: borderWidth,
        borderBottomRightRadius: borderWidth,
      };
    }
    return { ...headStyle, backgroundColor: 'green' };
  };

  return <Animated.View style={[styles.body, renderBorder(), springStyles]} />;
};
