import React, { createContext, ReactNode, useContext, useState } from 'react';

interface Props {
  children: ReactNode;
}

const PointsContext = createContext<
  [number, React.Dispatch<React.SetStateAction<number>>]
>([0, () => {}]);

const PointsProvider = ({ children }: Props) => {
  const value = useState(0);

  return (
    <PointsContext.Provider value={value}>{children}</PointsContext.Provider>
  );
};

export const usePoints = () => {
  const [points, setPoints] = useContext(PointsContext);
  const handleEat = () => setPoints(acc => acc + 10);
  const reset = () => setPoints(0);

  return { points, handleEat, reset };
};

export default PointsProvider;
