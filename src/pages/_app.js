import React from 'react'
import Wrapper from '../components/organisms/Wrapper'
import ContextManager from '../context/ContextManager'
import 'bootstrap/dist/css/bootstrap.min.css'

const MyApp = ({ Component, pageProps }) => {
  return (
    <ContextManager>
      <Wrapper>
        <Component {...pageProps} />
      </Wrapper>
    </ContextManager>
  )
}

export default MyApp
