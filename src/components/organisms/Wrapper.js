import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { MainRouter } from '../../router/MainRouter'
import { useAuth } from '../../hooks/useAuth'
import { Container } from 'react-bootstrap'
import Header from './Header'

const Wrapper = ({ children }) => {
  const router = useRouter()
  console.log(router)
  const { loading, auth, login, logout } = useAuth()

  useEffect(() => {
    if (loading === false) {
      const pageNow = router.pathname.split('/')

      if (login === false && pageNow[1] === 'app') {
        router.push('/auth/login')
      }
      if (login === true && pageNow[1] === 'auth') {
        router.push('/app/home')
      }
    }
  }, [loading, auth, MainRouter, router, login])

  return (
    <Container>
      <Header login={login} logout={logout} />
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="pr-2 pl-2">{children}</div>
      )}
    </Container>
  )
}

export default Wrapper
