import React, { useState, useEffect, useContext } from "react";
import { Redirect } from "react-router-dom";
import LoginForm from "../LoginForm/LoginForm";
import { signIn, isTokenInStorage } from "../SignIn/SignIn";
import { LoginContext } from "../../context/LoginContext";

const REFRESH_INTERVAL = 100;

const Auth = (props) => {
  const contextLogin = useContext(LoginContext);

  const [warningMessage, setWarningMessage] = useState(false);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const id = setInterval(
      () => contextLogin.setLoggedIn(isTokenInStorage()),
      REFRESH_INTERVAL
    );

    return () => {
      clearInterval(id);
    };
  }, [contextLogin]);

  const onLogInClick = (email, password) => {
    return signIn(email, password)
      .then(() => {
        contextLogin.setLoggedIn(true);
        setRedirect(true);
      })
      .catch((err) => {
        setWarningMessage(true);
        contextLogin.setLoggedIn(false);
      });
  };

  return (
    <div>
      {!contextLogin.isLoggedIn && (
        <LoginForm
          onLogInClick={onLogInClick}
          warningMessage={warningMessage}
          setWarningMessage={setWarningMessage}
        />
      )}
      {redirect && <Redirect to="/"></Redirect>}
    </div>
  );
};

export default Auth;
