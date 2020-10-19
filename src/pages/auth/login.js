import React from 'react'
import * as Yup from 'yup'
import { v4 as uuidV4 } from 'uuid'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useAuthContext } from '../../context/AuthContextProvider'

const SignupSchema = Yup.object().shape({
  username: Yup.string().required(),
  email: Yup.string().email('Invalid email').required('Required')
})

const login = () => {
  const { dispatchAuth } = useAuthContext()
  // console.log(auth)

  const handleLogin = e => {
    dispatchAuth({
      type: 'SIGNIN',
      userId: uuidV4(),
      timeout: new Date().getTime(),
      username: e.username,
      email: e.email
    })
  }

  return (
    <div>
      <h1>Signup</h1>
      <Formik
        initialValues={{
          username: '',
          email: ''
        }}
        validationSchema={SignupSchema}
        onSubmit={values => {
          handleLogin(values)
        }}
      >
        {() => (
          <Form>
            <div>
              <label htmlFor="username">Username</label>
              <Field name="username" />
              <ErrorMessage name="username" />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <Field name="email" type="email" />
              <ErrorMessage name="email" />
            </div>
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default login
