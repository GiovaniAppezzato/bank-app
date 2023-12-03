import React, { createContext, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import api from '../services/api';
import Toast from '../utils/toastUtils';
import { useAuth } from '../hooks/useAuth';

export const AccountContext = createContext();

export const AccountProvider = ({ children }) => {
  const [account, setAccount] = useState(null);
  const [extract, setExtract] = useState([
    {
      id: 1,
      name: 'Transferência Recebida',
      value: 1000,
      date: '11 Nov',
      type: 'success'
    },
    {
      id: 2,
      name: 'Pix enviado',
      value: 1000,
      date: '11 Nov',
      type: 'danger'
    },
    {
      id: 3,
      name: 'Transferência Recebida',
      value: 1000,
      date: '11 Nov',
      type: 'success'
    },
    {
      id: 4,
      name: 'Transferência Recebida',
      value: 1000,
      date: '11 Nov',
      type: 'success'
    },
    {
      id: 5,
      name: 'Transferência Recebida',
      value: 1000,
      date: '11 Nov',
      type: 'success'
    }
  ]);

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

  async function transfer(accountNumber, amount) {
    try {
      const response = await api.post('/account/transfers', { number: accountNumber, amount });
      const { accountSender } = response.data;

      setAccount(accountSender);

      return response;
    } catch (error) {
      throw error;
    }
  }

  async function pixTransfer(pixKey, amount) {
    try {
      const response = await api.post('/pix-movements', { pix_key: pixKey, amount });
      const { accountSender } = response.data;

      setAccount(accountSender);

      return response;
    } catch (error) {
      throw error;
    }
  }

  return (
    <AccountContext.Provider
      value={{
        account,
        extract,
        getAccount,
        transfer,
        pixTransfer,
      }}>
      {children}
    </AccountContext.Provider>
  )
}