import React, { useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import Snake from '../components/snake';

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
  const renderColumnsRows = useCallback((rows: number, columns: number) => {
    const rowsRender = [];
    for (let x = 0; x < rows; x++) {
      const columnsRender = [];
      for (let y = 0; y < columns; y++) {
        columnsRender.push(<View key={y} style={styles.square} />);
      }
      rowsRender.push(
        <View key={x} style={styles.row}>
          {columnsRender}
        </View>,
      );
    }
    return rowsRender;
  }, []);

  return <View style={styles.container}>{renderColumnsRows(10, 10)}</View>;
};
