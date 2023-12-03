import React, { createContext, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import api from '../services/api';
import Toast from '../utils/toastUtils';
import { useAuth } from '../hooks/useAuth';

export const AccountContext = createContext();

export const AccountProvider = ({ children }) => {
  const [account, setAccount] = useState(null);

  const { token } = useAuth();

  async function getAccount() {
    try {
      const response = await api.get('/account', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      const { account } = response.data;
      setAccount(account);

      return response;
    } catch (error) {      
      throw error;
    }
  }

  return (
    <AccountContext.Provider
      value={{
        account,
        getAccount
      }}>
      {children}
    </AccountContext.Provider>
  )
}