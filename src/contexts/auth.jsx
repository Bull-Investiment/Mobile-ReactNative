import React, { createContext, useState, useEffect, useContext } from 'react';

import AsyncStorage from '@react-native-community/async-storage';

// import * as auth from '../services/auth';

import { getStorage, setStorage } from '../util/manageLocalStorage';

const AuthContext = createContext({});

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [userHasInvestorInfo, setUserHasInvestorInfo] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadUser() {
            const storagedUser = await getStorage('@Auth:user');

            if (!storagedUser) {
              setUser(null);
            }

            setLoading(false);
        }

        loadUser();
    }, []);
    
    const signOut = () => {
        AsyncStorage.clear().then(() => {
            setUser(null);
        });
    }

    const signIn = (userInfo) => {
      // do -- logica login -> check user in database etc
      const { email, senha, keepConnection } = userInfo;

      if (keepConnection) {
        const setStatus = setStorage('@Auth:user', { email, senha });

        if (!setStatus) {
          setUser(null);
          return; // erro
        }
      }

      setUser({ email, senha });
    }

    return (
        <AuthContext.Provider value={{signed: !!user, user, loading, signIn, signOut, userHasInvestorInfo, setUserHasInvestorInfo}}> 
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext);

    return context;
}

