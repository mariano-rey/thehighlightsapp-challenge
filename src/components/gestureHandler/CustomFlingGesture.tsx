import React, { ReactNode } from 'react';
import {
  Directions,
  FlingGestureHandler,
  FlingGestureHandlerEventPayload,
  HandlerStateChangeEvent,
  State,
} from 'react-native-gesture-handler';
import { IDirection } from '../../layout/types';

interface Props {
  children: ReactNode;
  onMove: (newDirection: IDirection) => void;
}

export default ({ children, onMove }: Props) => {
  const onHandler = (
    event: HandlerStateChangeEvent<FlingGestureHandlerEventPayload>,
    newDirection: IDirection,
  ) => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      onMove(newDirection);
    }
  };

  return (
    <FlingGestureHandler
      onHandlerStateChange={e => onHandler(e, 'down')}
      numberOfPointers={1}
      direction={Directions.DOWN}>
      <FlingGestureHandler
        numberOfPointers={1}
        onHandlerStateChange={e => onHandler(e, 'top')}
        direction={Directions.UP}>
        <FlingGestureHandler
          numberOfPointers={1}
          onHandlerStateChange={e => onHandler(e, 'left')}
          direction={Directions.LEFT}>
          <FlingGestureHandler
            onHandlerStateChange={e => onHandler(e, 'right')}
            numberOfPointers={1}
            direction={Directions.RIGHT}>
            {children}
          </FlingGestureHandler>
        </FlingGestureHandler>
      </FlingGestureHandler>
    </FlingGestureHandler>
  );
};
