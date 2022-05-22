import React, { useCallback, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Snake from '../components/snake';
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
});

export default ({ setPoints }: Props) => {
  const [[rowFood, columnFood], setFoodPosition] = useState<[number, number]>([
    randomNumber(),
    randomNumber(),
  ]);

  const renderColumnsRows = useCallback(
    (rows: number, columns: number) => {
      const isSelected = (rowNumber: number, columnNumber: number) =>
        rowNumber === rowFood && columnNumber === columnFood;
      const rowsRender = [];
      for (let x = 0; x < rows; x++) {
        const columnsRender = [];
        for (let y = 0; y < columns; y++) {
          columnsRender.push(
            <View
              key={y}
              style={[
                styles.square,
                { backgroundColor: isSelected(x, y) ? 'black' : undefined },
              ]}
            />,
          );
        }
        rowsRender.push(
          <View key={x} style={styles.row}>
            {columnsRender}
          </View>,
        );
      }
      return rowsRender;
    },
    [rowFood, columnFood],
  );

  return <View style={styles.container}>{renderColumnsRows(10, 10)}</View>;
};
