import { SharedValue } from 'react-native-reanimated';
import { IDirection, ISnakePosition } from '../../layout/types';

export interface ISnake {
  direction: IDirection;
  snakePosition: SharedValue<ISnakePosition>;
}
