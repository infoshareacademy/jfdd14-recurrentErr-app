import React, { useState } from "react";
import {
  Button,
  Form,
  Grid,
  Card,
  Header,
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import "../Search/SearchForm.css";
import "../LoginForm/LoginForm.css";

const RegisterForm = ({ onSignUpClick, warningMessage, setWarningMessage }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmed, setPasswordConfirmed] = useState("");
  const [passwordDiffMessage, setPasswordDiffMessage] = useState(false);
  // const [emailValidationMessage, setEmailValidationMessage] = useState(false);

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
    setWarningMessage(false);
    // setEmailValidationMessage(false)
  };

  const handleChangePassword = (e, email) => {
    // let text = validateEmail(email);
    setPassword(e.target.value);
    setPasswordDiffMessage(false);
    // return text ? null : setEmailValidationMessage(true)
  };

  const handleChangePasswordConfirmed = (e) => {
    setPasswordConfirmed(e.target.value);
    setPasswordDiffMessage(false);
  };

  // const validateEmail = (email) => {
  //   let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //   return reg.test(String(email).toLowerCase());
  // };

  const comparePasswords = () => {
    return password !== passwordConfirmed
      ? setPasswordDiffMessage(true)
      : onSignUpClick(email, password);
  };

  return (
    <Grid centered padded>
      <Grid.Column textAlign="center" width={16}>
        <Header as="h2">Zarejestruj się</Header>
      </Grid.Column>
      <Grid.Column
        as={Card}
        className="cardElements"
        textAlign="center"
        tablet={13}
        computer={6}
        largeScreen={7}
      >
        <Form className="form__container">
          <Form.Input
            className="formInput"
            value={email}
            onChange={handleChangeEmail}
            placeholder="Podaj adres email"
          />
          <Form.Input
            className="formInput"
            value={password}
            onChange={handleChangePassword}
            placeholder="Wprowadź hasło"
            type="password"
          />
          <Form.Input
            className="formInput"
            value={passwordConfirmed}
            onChange={handleChangePasswordConfirmed}
            placeholder="Potwierdź hasło"
            type="password"
          />
          {passwordDiffMessage && (
            <ErrorMessage>Wpisane hasła nie są zgodne</ErrorMessage>
          )}
          {warningMessage && (
            <ErrorMessage>
              Użytkownik o podanym adresie email już istnieje!
            </ErrorMessage>
          )}
          {/* {emailValidationMessage && (
            <ErrorMessage>Niepoprawny adres email!</ErrorMessage>
          )} */}
          <Header as="h5" textAlign="left" style={{ opacity: ".5" }}>
            Rejestrując się, potwierdzasz przeczytanie i akceptację warunków
            usługi i polityki prywatności.
          </Header>
          <Button
            className="form__btn"
            onClick={() => {
              comparePasswords();
            }}
          >
            Zarejestruj się
          </Button>
          <Header as="h4">
            Posiadasz już konto? - <Link to="/login">Zaloguj się</Link>
          </Header>
        </Form>
      </Grid.Column>
    </Grid>
  );
};

export default RegisterForm;
