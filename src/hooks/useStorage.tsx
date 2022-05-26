import AsyncStorage from '@react-native-async-storage/async-storage';

export enum KEYS_STORAGE {
  HIGHSCORE = 'highscore',
}

export default () => {
  const setData = async (key: KEYS_STORAGE, value: any) => {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  };

  const getData = async (key: KEYS_STORAGE) => {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  };

  return { setData, getData };
};
