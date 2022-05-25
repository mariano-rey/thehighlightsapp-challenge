import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSharedValue } from 'react-native-reanimated';
import Food from '../components/Food';
import CustomFlingGesture from '../components/gestureHandler/CustomFlingGesture';
import Snake from '../components/snake';
import { usePoints } from '../contexts/PointsContext';
import { isCorrectDirection } from '../utils/Direction';
import { getRandomPosition } from '../utils/Maths';
import { IDirection, IFood, ISnakePosition } from './types';

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    height: 400,
    width: 400,
    flexDirection: 'column',
    alignSelf: 'center',
    position: 'relative',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  square: {
    borderColor: 'green',
    borderWidth: 0.5,
    borderStyle: 'dotted',
    flex: 1,
  },
});

export default () => {
  const [direction, setDirection] = useState<IDirection>('left');
  const { setPoints } = usePoints();

  const [{ columnFood, rowFood }, setFoodPosition] = useState<IFood>(
    getRandomPosition(),
  );
  const snakePosition = useSharedValue<ISnakePosition>({ left: 0, top: 0 });

  const renderColumnsRows = (rows: number, columns: number) => {
    const rowsRender = [];
    for (let x = 0; x < rows; x++) {
      const columnsRender = [];
      for (let y = 0; y < columns; y++) {
        const isFoodPosition = x === rowFood && y === columnFood;
        columnsRender.push(
          <View key={y} style={styles.square}>
            {isFoodPosition && <Food />}
          </View>,
        );
      }
      rowsRender.push(
        <View key={x} style={styles.row}>
          {columnsRender}
        </View>,
      );
    }
    return rowsRender;
  };

  const onMove = (newDirection: IDirection) => {
    if (isCorrectDirection(direction, newDirection)) {
      setDirection(newDirection);

      const toValue = 40;
      const minValue = 0;
      const maxValue = 360;
      let newPosition: ISnakePosition;
      const { left, top } = snakePosition.value;
      if (newDirection === 'down') {
        const newTop = top < maxValue ? top + toValue : minValue;
        newPosition = { left, top: newTop };
      } else if (newDirection === 'top') {
        const newTop = top >= toValue ? top - toValue : maxValue;
        newPosition = { left, top: newTop };
      } else if (newDirection === 'left') {
        const newLeft = left >= toValue ? left - toValue : maxValue;
        newPosition = { left: newLeft, top };
      } else {
        const newLeft = left < maxValue ? left + toValue : minValue;
        newPosition = { left: newLeft, top };
      }

      const snakeRow = newPosition.top / toValue;
      const snakeColumn = newPosition.left / toValue;
      if (snakeRow === rowFood && snakeColumn === columnFood) {
        setPoints(acc => acc + 10);
        setFoodPosition(getRandomPosition());
      }

      console.log(newPosition.top, newPosition.left);
      snakePosition.value = newPosition;
    }
  };

  return (
    <View>
      <CustomFlingGesture onMove={onMove}>
        <View style={styles.container}>
          {renderColumnsRows(10, 10)}
          <Snake direction={direction} snakePosition={snakePosition} />
        </View>
      </CustomFlingGesture>
    </View>
  );
};
