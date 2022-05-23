import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Food from '../components/Food';
import CustomFlingGesture from '../components/gestureHandler/CustomFlingGesture';
import Snake from '../components/snake';
import { usePoints } from '../contexts/PointsContext';
import { randomNumber } from '../utils/Maths';

export type IDirection = 'left' | 'right' | 'top' | 'down';

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    height: 400,
    flexDirection: 'column',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  square: {
    borderColor: 'green',
    borderWidth: 0.5,
    flex: 1,
  },
});

const getRandomPosition = (): [number, number] => [
  randomNumber(),
  randomNumber(),
];

export default () => {
  const [direction, setDirection] = useState<IDirection>('left');
  const { setPoints } = usePoints();

  const [[rowFood, columnFood], setFoodPosition] = useState<[number, number]>(
    getRandomPosition(),
  );
  const [[rowSnake, columnSnake], setSnakePosition] = useState<
    [number, number]
  >(getRandomPosition());

  const renderSnakeFood = (rowNumber: number, columnNumber: number) => {
    const isSnakePosition =
      rowNumber === rowSnake && columnNumber === columnSnake;
    const isFoodPosition = rowNumber === rowFood && columnNumber === columnFood;

    if (isSnakePosition) {
      if (rowSnake === rowFood && columnSnake === columnFood) {
        setPoints(acc => acc + 10);
        setFoodPosition(getRandomPosition());
      }
      return (
        <Snake
          key={columnNumber}
          direction={direction}
          setPosition={setSnakePosition}
        />
      );
    } else if (isFoodPosition) {
      return <Food key={columnNumber} />;
    }
    return <View key={columnNumber} style={styles.square} />;
  };

  const renderColumnsRows = (rows: number, columns: number) => {
    const rowsRender = [];
    for (let x = 0; x < rows; x++) {
      const columnsRender = [];
      for (let y = 0; y < columns; y++) {
        columnsRender.push(renderSnakeFood(x, y));
      }
      rowsRender.push(
        <View key={x} style={styles.row}>
          {columnsRender}
        </View>,
      );
    }
    return rowsRender;
  };

  return (
    <CustomFlingGesture setDirection={setDirection}>
      <View style={styles.container}>{renderColumnsRows(10, 10)}</View>
    </CustomFlingGesture>
  );
};
