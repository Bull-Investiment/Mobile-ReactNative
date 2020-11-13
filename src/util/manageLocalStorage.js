import AsyncStorage from '@react-native-async-storage/async-storage';

export const getStorage = async (key) => {
  try {
    const storagedValue = await AsyncStorage.getItem(key);
    
    if (storagedValue) {
      return JSON.parse(storagedValue);
    }

    return null;
  } catch (err) {
    return null;
  }
}

export const setStorage = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));

    return true;
  } catch (err) {
    return false;
  }
}