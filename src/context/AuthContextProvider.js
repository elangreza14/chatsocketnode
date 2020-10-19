import React, { createContext, useContext, useReducer } from 'react'
import { AuthReducer } from '../reducers/Authreducer'

export const AuthContext = createContext()

export const useAuthContext = () => {
  return useContext(AuthContext)
}

const AuthContextProvider = ({ children }) => {
  const initialState = {
    isLoggedIn: false,
    userId: '',
    timeout: '',
    username: '',
    email: ''
  }

  const [auth, dispatchAuth] = useReducer(AuthReducer, initialState)

  return (
    <AuthContext.Provider value={{ auth, dispatchAuth }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
