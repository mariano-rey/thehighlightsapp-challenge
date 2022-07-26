import React from 'react';
import { Button } from 'react-native';
import { usePoints } from '../../contexts/PointsContext';

interface Props {
  onClick?: () => void;
}

export default ({ onClick }: Props) => {
  const { points, reset } = usePoints();

  return (
    <Button
      disabled={points === 0}
      title="Restart"
      onPress={() => {
        reset();
        onClick && onClick();
      }}
    />
  );
};
