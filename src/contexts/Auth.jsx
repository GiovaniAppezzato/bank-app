import React, { 
  createContext, 
  useState 
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import api from '../services/api';
import Toast from '../utils/toastUtils';
import { buildFormDataSignUp } from '../utils/authUtils';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  async function signUp(data) {
    try {
      const formData = buildFormDataSignUp(data);

      const response = await api.post('/register', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      if(response.status === 200 || response.status === 201) {
        saveSignIn(response);
      }
      
      return response;
    } catch (error) {
      showMessageError(error);
      
      throw error;
    }
  }

  async function signIn(data) {
    try {
      const response = await api.post('/login', data);

      if(response.status === 200) {
        saveSignIn(response);
      }

      return response;
    } catch (error) {
      showMessageError(error);
      
      throw error;
    }
  }

  async function saveSignIn(response) {
    const { token, user } = response.data;

    const plainTextToken = token.plainTextToken;

    setToken(plainTextToken);
    setUser(user);

    await AsyncStorage.setItem('@cm:token', plainTextToken);
    await AsyncStorage.setItem('@cm:user', user.id.toString());

    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }

  function showMessageError(error) {
    const { message } = error.response.data;

    if(message) {
      Toast.show(message);
    } else {
      Toast.show('Problemas de conexão com o servidor.');
    }
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: Boolean(token),
        token,
        user,
        signIn,
        signUp
      }}>
      {children}
    </AuthContext.Provider>
  )
}