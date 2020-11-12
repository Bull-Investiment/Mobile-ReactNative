import { useState, useEffect } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

import getStorageDefault from './getStorageDefault';

function usePersistentState(key, initialState) {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    getStorageDefault(key, initialState).then(res => setState(res));
  }, []);

  useEffect(() => {
    AsyncStorage.setItem(key, JSON.stringify(state));
  }, [state, setState])

  return [state, setState];
} 

export default usePersistentState;
