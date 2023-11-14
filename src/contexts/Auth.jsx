import React, {
  createContext,
  useState
} from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: Boolean(token),
        token,
        user
      }}>
      {children}
    </AuthContext.Provider>
  )
}