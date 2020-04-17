import React, { useState, useEffect } from "react";
import LoginForm from "../LoginForm/LoginForm";
import { signIn, isTokenInStorage } from "../SignIn/SignIn";
import { Redirect } from "react-router-dom";

const REFRESH_INTERVAL = 100;

const Auth = (props) => {
  const [isLoggedIn, setLoggedIn] = useState(isTokenInStorage());
  const [warningMessage, setWarningMessage] = useState(false);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const id = setInterval(
      () => setLoggedIn(isTokenInStorage()),
      REFRESH_INTERVAL
    );

    return () => {
      clearInterval(id);
    };
  }, []);

  const onLogInClick = (email, password) => {
    return signIn(email, password)
      .then(() => {
        setLoggedIn(true);
        setRedirect(true);
      })
      .catch((err) => {
        setWarningMessage(true);
        setLoggedIn(false);
      });
  };

  return (
    <div>
      {!isLoggedIn ? (
        <LoginForm
          onLogInClick={onLogInClick}
          warningMessage={warningMessage}
          setWarningMessage={setWarningMessage}
        />
      ) : (
        props.children
      )}
      {redirect && <Redirect to="/"></Redirect>}
    </div>
  );
};

export default Auth;
