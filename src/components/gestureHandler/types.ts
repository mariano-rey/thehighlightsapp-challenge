import { ReactNode } from 'react';
import { IDirection } from '../../layout/types';

export interface ICustomGesture {
  children: ReactNode;
  onMove: (newDirection: IDirection) => void;
}
