import React, { useState, useEffect } from "react";
import RegisterForm from "../RegisterForm/RegisterForm"
import { isTokenInStorage } from "../SignIn/SignIn";
import { signUp } from "../SignUp/SignUp";

const REFRESH_INTERVAL = 100;

const Register = (props) => {
  const [isRegister, setRegister] = useState(isTokenInStorage())
  const [warningMessage, setWarningMessage] = useState(false);

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
        
      })
      .catch((err) => {
        setWarningMessage(true);
        console.log(err);
        setRegister(false);
      });
  };

  return (
    <div>
      {!isRegister ? (
      <RegisterForm onSignUpClick={onSignUpClick} warningMessage={warningMessage} setWarningMessage={setWarningMessage} />) : null}
    </div>
  );
};

export default Register;
