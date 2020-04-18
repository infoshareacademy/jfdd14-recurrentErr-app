import React, { useState, useEffect } from "react";
import RegisterForm from "../RegisterForm/RegisterForm";
import { isTokenInStorage } from "../SignIn/SignIn";
import { signUp } from "../SignUp/SignUp";
import { Redirect } from "react-router-dom";

const REFRESH_INTERVAL = 100;

const Register = (props) => {
  const [isRegister, setRegister] = useState(isTokenInStorage());
  const [warningMessage, setWarningMessage] = useState(false);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const id = setInterval(
      () => setRegister(isTokenInStorage()),
      REFRESH_INTERVAL
    );

    return () => {
      clearInterval(id);
    };
  }, []);

  const onSignUpClick = (email, password) => {
    return signUp(email, password)
      .then(() => {
        setRegister(true);
        setRedirect(true);
      })
      .catch((err) => {
        setWarningMessage(true);
        setRegister(false);
      });
  };

  return (
    <div>
      {!isRegister ? (
        <RegisterForm
          onSignUpClick={onSignUpClick}
          warningMessage={warningMessage}
          setWarningMessage={setWarningMessage}
        />
      ) : null}
      {redirect && <Redirect to="/"></Redirect>}
    </div>
  );
};

export default Register;
