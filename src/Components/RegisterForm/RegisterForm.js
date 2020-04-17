import React, { useState } from "react";
import {
  Button,
  Form,
  Grid,
  Card,
  Header,
  Message,
  Icon,
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import "../Search/SearchForm.css";
import "../LoginForm/LoginForm.css";

const RegisterForm = ({ onSignUpClick, warningMessage, setWarningMessage }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmed, setPasswordConfirmed] = useState("");
  const [messagePasswordDiff, setMessagePasswordDiff] = useState(false);

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
    setWarningMessage(false);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
    setWarningMessage(false);
    setMessagePasswordDiff(false);
  };

  const handleChangePasswordConfirmed = (e) => {
    setPasswordConfirmed(e.target.value);
    setWarningMessage(false);
    setMessagePasswordDiff(false);
  };

  const handleClick = () => {
    onSignUpClick(email, password);
    comparePasswords();
  };

  const comparePasswords = () => {
    const popUpInfo =
      password !== passwordConfirmed ? setMessagePasswordDiff(true) : null;
    return popUpInfo;
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
          {messagePasswordDiff && (
            <Message negative>
              <Grid stackable columns={2}>
                <Header as="h5" className="form__message__header">
                  <Icon name="warning circle" size="large" />
                  Niezgodne hasła
                </Header>
              </Grid>
            </Message>
          )}
          {warningMessage && (
            <Message negative>
              <Grid stackable columns={2}>
                <Header as="h5" className="form__message__header">
                  <Icon name="warning circle" size="large" />
                  Istnieje już użytkownik o takim adresie email!
                </Header>
              </Grid>
            </Message>
          )}
          <Header as="h5" textAlign="left" style={{ opacity: ".5" }}>
            Rejestrując się, potwierdzasz przeczytanie i akceptację warunków
            usługi i polityki prywatności.
          </Header>
          <Button
            className="form__btn"
            onClick={() => {
              handleClick();
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
