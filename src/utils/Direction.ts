import { IDirection } from '../layout/types';

export const isCorrectDirection = (
  actualDirection: IDirection,
  newDirection: IDirection,
) =>
  (actualDirection === 'down' && newDirection !== 'top') ||
  (actualDirection === 'top' && newDirection !== 'down') ||
  (actualDirection === 'left' && newDirection !== 'right') ||
  (actualDirection === 'right' && newDirection !== 'left');
