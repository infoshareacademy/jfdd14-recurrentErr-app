import React, { useState, useEffect } from 'react'
import LoginForm from '../LoginForm/LoginForm'
import { signIn, isTokenInStorage } from '../SignIn/SignIn'

const REFRESH_INTERVAL = 100

const Auth = (props) => {
  const [isLoggedIn, setLoggedIn] = useState(isTokenInStorage())

  useEffect(() => {
    const id = setInterval(
      () => setLoggedIn(isTokenInStorage()),
      REFRESH_INTERVAL
    )

    return () => {
      clearInterval(id)
    }
  }, [])

  const onLogInClick = (email, password) => {
    return signIn(email, password)
      .then(() => {
        setLoggedIn(true)
      })
      .catch((err) => {
        alert('Błąd logowania!')
        console.log(err)
        setLoggedIn(false)
      })
  }

  return (
    !isLoggedIn ?
      <LoginForm onLogInClick={onLogInClick} />
      :
      props.children
  )
}

export default Auth;
