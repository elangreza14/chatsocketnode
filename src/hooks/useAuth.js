import { useCallback, useEffect, useState } from 'react'
import { useAuthContext } from '../context/AuthContextProvider'

export const useAuth = () => {
  const [loading, setLoading] = useState(true)
  const { auth, dispatchAuth } = useAuthContext()

  const store = useCallback(
    data => localStorage.setItem('UserData', JSON.stringify(data)),
    []
  )

  const get = useCallback(parsed => {
    dispatchAuth({
      type: 'RESTORE',
      isLoggedIn: parsed.isLoggedIn,
      userId: parsed.userId,
      timeout: parsed.timeout,
      username: parsed.username,
      email: parsed.email
    })
    setLoading(false)
  }, [])

  const logout = useCallback(() => {
    dispatchAuth({ type: 'LOGOUT' })
  }, [dispatchAuth])

  useEffect(() => {
    var cat = localStorage.getItem('UserData')
    if (cat) {
      get(JSON.parse(cat))
    } else {
      setLoading(false)
    }
  }, [get])

  useEffect(() => {
    store(auth)
  }, [auth, store])

  return {
    loading,
    auth,
    login: auth.isLoggedIn,
    logout
  }
}
