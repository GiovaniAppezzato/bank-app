import { useContext } from 'react';
import { AccountContext } from '../contexts/Account';

export function useAccount()  {
  const context = useContext(AccountContext);

  if (!context) {
    throw new Error('useAccount must be used within an AccountProvider');
  }

  return context;
}