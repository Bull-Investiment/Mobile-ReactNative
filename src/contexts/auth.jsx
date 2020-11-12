import React, { createContext, useState, useEffect, useContext } from 'react';

import AsyncStorage from '@react-native-community/async-storage';

// import * as auth from '../services/auth';

import usePersistentState from '../util/usePersistentState';
import getStorageDefault from '../util/getStorageDefault';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = usePersistentState('@Auth:user', null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadToken() {
            const storageToken = await getStorageDefault('@Auth:token', null);

            if (!storageToken) {
              setUser(null);
            }

            setLoading(false);
        }

        loadToken();
    }, [])
    
    function signOut() {
        AsyncStorage.clear().then(() => {
            setUser(null);
        });
    }

    return (
        <AuthContext.Provider value={{signed: !!user, user, loading, signOut}}> 
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext);

    return context;
}