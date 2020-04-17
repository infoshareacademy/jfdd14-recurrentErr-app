import React, { useState } from "react";
import { Button, Form, Grid, Card, Header, Message, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "../Search/SearchForm.css";
import "../LoginForm/LoginForm.css";

const LoginForm = ({ onLogInClick, warningMessage, setWarningMessage }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
    setWarningMessage(false);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
    setWarningMessage(false);
  };

  return (
    <Grid centered padded>
      <Grid.Column textAlign="center" width={16}>
        <Header as="h2">Zaloguj do crossRoads</Header>
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
          {warningMessage && (
            <Message negative>
              <Grid stackable columns={2}>
                <Header as="h5" className="form__message__header">
                  <Icon name="warning circle" size="large" />
                  Niepoprawny email lub hasło!
                </Header>
              </Grid>
            </Message>
          )}
          <Button
            className="form__btn"
            onClick={() => onLogInClick(email, password)}
          >
            Zaloguj się
          </Button>
          <Header as="h4">
            Nie masz konta? - <Link to="/register">Zarejestruj się</Link>
          </Header>
        </Form>
      </Grid.Column>
    </Grid>
  );
};

export default LoginForm;
