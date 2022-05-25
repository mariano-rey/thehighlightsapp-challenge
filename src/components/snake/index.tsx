import React from 'react';
import { StyleProp, StyleSheet, ViewStyle } from 'react-native';
import Animated, {
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import { usePoints } from '../../contexts/PointsContext';
import { ISnake } from './types';

const styles = StyleSheet.create({
  commons: {
    height: 35,
    width: 35,
    backgroundColor: 'black',
    position: 'absolute',
  },
});

export default ({ direction, snakePosition }: ISnake) => {
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

  const renderSnake = () => {
    const snake = [
      <Animated.View
        key="head"
        style={[styles.commons, renderBorder(), springStyles]}
      />,
    ];
    // for (let i = 0; i < points / 10; i++) {
    //   snake.push(
    //     <Animated.View
    //       key={`body-${i}`}
    //       style={[styles.commons, springStyles]}
    //     />,
    //   );
    // }
    return snake;
  };

  return <>{renderSnake()}</>;
};
