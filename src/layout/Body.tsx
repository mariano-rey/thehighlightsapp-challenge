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

export default () => {
  const [direction, setDirection] = useState<IDirection>('left');
  const { setPoints } = usePoints();

  const [{ columnFood, rowFood }, setFoodPosition] = useState<IFood>(
    getRandomPosition(),
  );
  const snakePosition = useSharedValue<ISnakePosition>({
    left: 15,
    top: 0,
  });

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
      let newPosition: ISnakePosition;
      const { left, top } = snakePosition.value;
      if (newDirection === 'down') {
        const newTop = top < 360 ? top + toValue : 0;
        newPosition = { left, top: newTop };
      } else if (newDirection === 'top') {
        const newTop = top >= toValue ? top - toValue : 360;
        newPosition = { left, top: newTop };
      } else if (newDirection === 'left') {
        const newLeft = left >= toValue ? left - toValue : 375;
        newPosition = { left: newLeft, top };
      } else {
        const newLeft = left < 375 ? left + toValue : 15;
        newPosition = { left: newLeft, top };
      }

      const snakeRow = newPosition.top / 40;
      const snakeColumn = (newPosition.left - 15) / 40;
      if (snakeRow === rowFood && snakeColumn === columnFood) {
        setPoints(acc => acc + 10);
        setFoodPosition(getRandomPosition());
      }

      snakePosition.value = newPosition;
    }
  };

  return (
    <View>
      <CustomFlingGesture onMove={onMove}>
        <View style={styles.container}>{renderColumnsRows(10, 10)}</View>
      </CustomFlingGesture>
      <Snake direction={direction} snakePosition={snakePosition} />
    </View>
  );
};
