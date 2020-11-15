import React, { createContext, useState, useEffect, useContext } from 'react';

import AsyncStorage from '@react-native-community/async-storage';

import { getStorage, setStorage } from '../util/manageLocalStorage';

import api from '../services/api';

const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [userHasInvestorInfo, setUserHasInvestorInfo] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadUser() {
      const storagedUser = await getStorage('@Auth:user');

      if (storagedUser) {
        setUser(storagedUser);
      }

      setLoading(false);
    }

    loadUser();
  }, []);

  const signOut = async () => {
    const storagedUser = await getStorage('@Auth:user');

    if (storagedUser) {
      await AsyncStorage.clear();
    }

    setUser(null);
    setUserHasInvestorInfo(false);
  }

  const signIn = async (userInfo) => {
    // do -- logica login -> check user in database etc
    const { email, password } = userInfo;

    try {
      const response = await api.post('/login', { email, password });

      const user = response.data.result;
      delete user.password;


      setUser(user);
      setUserHasInvestorInfo(!!user.type);
      
      if (userInfo.keepConnection) {
        await setStorage('@Auth:user', user);
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user, loading, signIn, signOut, userHasInvestorInfo, setUserHasInvestorInfo }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

