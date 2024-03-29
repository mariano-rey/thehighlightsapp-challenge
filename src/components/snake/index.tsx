import React, { useEffect } from 'react';
import { usePoints } from '../../contexts/PointsContext';
import Body from './Body';
import { ISnake } from './types';

export default ({ direction, snakePosition }: ISnake) => {
  const { points } = usePoints();

  const renderSnake = () => {
    const snake = [
      <Body
        key="head"
        position={0}
        snakePosition={snakePosition}
        direction={direction}
      />,
    ];
    if (points > 0) {
      for (let i = 1; i <= points / 10; i++) {
        snake.push(
          <Body
            key={`${snakePosition.value[i].left}-${snakePosition.value[i].top}`}
            position={i}
            snakePosition={snakePosition}
          />,
        );
      }
    }
    return snake;
  };

  useEffect(() => {
    if (points === 0) {
      snakePosition.value = [{ left: 0, top: 0 }];
    }
  }, [points, snakePosition]);

  return <>{renderSnake()}</>;
};
