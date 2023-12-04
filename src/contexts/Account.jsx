import React, { createContext, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import api from '../services/api';
import Toast from '../utils/toastUtils';
import { useAuth } from '../hooks/useAuth';

export const AccountContext = createContext();

export const AccountProvider = ({ children }) => {
  const [account, setAccount] = useState(null);
  const [cards, setCards] = useState([]);
  const [savings, setSavings] = useState(null);
  const [savingsMovements, setSavingsMovements] = useState([]);
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

  async function savingsTransfer(amount, type) {
    try {
      const response = await api.post('/savings/savings-movements', { amount, type });

      const { savingsMovement, account, savings } = response.data;

      setAccount(account);
      setSavings(savings);
      setSavingsMovements([savingsMovement, ...savingsMovements]);

      return response;
    } catch (error) {
      throw error;
    }
  }

  async function getCards() {
    try {
      const response = await api.get('/cards');

      const { cards } = response.data;
      setCards(cards);

      return response;
    } catch (error) {
      throw error;
    }
  }

  async function createCard(values) {
    try {
      const response = await api.post('/cards', values);

      const { card } = response.data;
      setCards([...cards, card]);

      return response;
    } catch (error) {
      throw error;
    }
  }

  async function destroyCard(id) {
    try {
      const response = await api.delete(`/cards/${id}`);
      setCards(cards.filter(card => card.id !== id));

      return response;
    } catch (error) {
      throw error;
    }
  }

  async function getSavings() {
    try {
      const response = await api.get('/savings');

      const { savings } = response.data;
      setSavings(savings);

      return response;
    } catch (error) {
      throw error;
    }
  }

  async function getSavingsMovements() {
    try {
      const response = await api.get('/savings/savings-movements');

      const { savingsMovements } = response.data;
      setSavingsMovements(savingsMovements);

      return response;
    } catch (error) {
      throw error;
    }
  }

  async function applyLoan(amount) {
    try {
      const response = await api.post('/loans', { amount });

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
        savings,
        savingsMovements,
        cards,
        extract,
        getAccount,
        getSavings,
        getSavingsMovements,
        getCards,
        createCard,
        destroyCard,
        transfer,
        pixTransfer,
        savingsTransfer,
        applyLoan
      }}>
      {children}
    </AccountContext.Provider>
  )
}