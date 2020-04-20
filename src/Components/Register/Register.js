import React, { useState, useContext } from "react";
import RegisterForm from "../RegisterForm/RegisterForm";
import { signUp } from "../SignUp/SignUp";
import { Redirect } from "react-router-dom";
import { LoginContext } from "../../context/LoginContext";

const Register = (props) => {
  const contextLogin = useContext(LoginContext);
  const [warningMessage, setWarningMessage] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const onSignUpClick = (email, password) => {
    return signUp(email, password)
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
        <RegisterForm
          onSignUpClick={onSignUpClick}
          warningMessage={warningMessage}
          setWarningMessage={setWarningMessage}
        />
      )}
      {redirect && <Redirect to="/"></Redirect>}
    </div>
  );
};

export default Register;
