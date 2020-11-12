import AsyncStorage from '@react-native-async-storage/async-storage';

const getStorageDefault = async (key, defaultValue) => {
  try {
    const storagedValue = await AsyncStorage.getItem(key);
    
    if (storagedValue) {
      return JSON.parse(storagedValue);
    }

    return defaultValue;
  } catch (err) {
    console.log(err);
    return defaultValue;
  }
}

export default getStorageDefault;