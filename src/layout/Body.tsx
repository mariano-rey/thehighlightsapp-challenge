import React, { useCallback, useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';
// import Snake from '../components/snake';
import { randomNumber } from '../utils/Maths';

interface Props {
  setPoints: React.Dispatch<React.SetStateAction<number>>;
}

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
  food: {
    height: 30,
    width: 30,
    alignSelf: 'center',
  },
  snake: {
    backgroundColor: 'black',
  },
});

const getRandomPosition = (): [number, number] => [
  randomNumber(),
  randomNumber(),
];

export default ({ setPoints }: Props) => {
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
      return <View key={columnNumber} style={[styles.square, styles.snake]} />;
    } else if (isFoodPosition) {
      return (
        <View key={columnNumber} style={styles.square}>
          <Image
            source={require('../assets/png/hamburger.png')}
            style={styles.food}
          />
        </View>
      );
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

  return <View style={styles.container}>{renderColumnsRows(10, 10)}</View>;
};
