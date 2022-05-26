import React from 'react';
import { Button } from 'react-native';
import { usePoints } from '../../contexts/PointsContext';

interface Props {
  onClick?: () => void;
}

export default ({ onClick }: Props) => {
  const { reset } = usePoints();

  return (
    <Button
      title="Restart"
      onPress={() => {
        reset();
        onClick && onClick();
      }}
    />
  );
};
