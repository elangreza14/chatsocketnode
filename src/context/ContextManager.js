import React from 'react'
import AuthContextProvider from './AuthContextProvider'

const ContextManager = ({ children }) => {
  return <AuthContextProvider>{children}</AuthContextProvider>
}

export default ContextManager
