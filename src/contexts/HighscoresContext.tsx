import moment from 'moment';
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import useStorage, { KEYS_STORAGE } from '../hooks/useStorage';
import { IHighscore } from '../layout/types';

interface Props {
  children: ReactNode;
}

const HighscoresContext = createContext<
  [IHighscore[], React.Dispatch<React.SetStateAction<IHighscore[]>>]
>([[], () => {}]);

const HighscoresProvider = ({ children }: Props) => {
  const [highscores, setHighscores] = useState<IHighscore[]>([]);
  const { getData } = useStorage();

  useEffect(() => {
    const getHighscores = async () => {
      const data = await getData(KEYS_STORAGE.HIGHSCORE);
      if (data) {
        setHighscores(data);
      }
    };
    getHighscores();
  }, [getData]);

  return (
    <HighscoresContext.Provider value={[highscores, setHighscores]}>
      {children}
    </HighscoresContext.Provider>
  );
};

export const useHighscores = () => {
  const [highscores, setHighscores] = useContext(HighscoresContext);
  const { setData } = useStorage();

  const handleHighscores = (newScore: number) =>
    setHighscores(acc => {
      if (acc.length >= 2) {
        if (acc[acc.length - 1].score > newScore) {
          return acc;
        } else {
          acc.splice(-1);
        }
      }

      const newHighscore = { date: moment().toDate(), score: newScore };
      acc.push(newHighscore);
      setData(KEYS_STORAGE.HIGHSCORE, acc);
      return acc.sort((a, b) => a.score - b.score);
    });

  const clear = () => {
    setHighscores([]);
    setData(KEYS_STORAGE.HIGHSCORE, []);
  };

  return { highscores, handleHighscores, clear };
};

export default HighscoresProvider;
