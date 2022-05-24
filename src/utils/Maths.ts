import { IFood } from '../layout/types';

export const randomNumber = () => Math.floor(Math.random() * 9);

export const getRandomPosition = (): IFood => ({
  rowFood: randomNumber(),
  columnFood: randomNumber(),
});
