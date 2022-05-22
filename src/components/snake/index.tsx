import React from 'react';
import { View } from 'react-native';
import Head from './Head';

interface Props {
  setPoints: React.Dispatch<React.SetStateAction<number>>;
}

export default ({ setPoints }: Props) => {
  return (
    <View>
      <Head />
    </View>
  );
};
