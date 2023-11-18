import React, {
  createContext,
  useState
} from 'react';

import api from '../services/api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  async function signUp(data) {
    try {
      api.post('/register', data)
        .then(response => {
          console.log("success", response);
        })
        .catch(error => {
          console.log("error", error);
        });

      /* const response = await api.post('/register', data);
      
      if(response.data.success) {
        console.log(response.data.data)
      }

      return response; */
    } catch (error) {
      throw error;
    }
  }

  async function signin(data) {
    try {
      const response = await api.post('/login', data);
      console.log(response);      
    } catch (error) {
      throw error;
    }
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: Boolean(token),
        token,
        user,
        signUp
      }}>
      {children}
    </AuthContext.Provider>
  )
}