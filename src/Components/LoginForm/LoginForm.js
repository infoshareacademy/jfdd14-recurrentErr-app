import React, { useState } from "react";
import { Button, Form, Grid, Card, Header } from "semantic-ui-react";
import "../Search/SearchForm.css";
import "./LoginForm.css";

const LoginForm = ({ onLogInClick }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmail = (e) => setEmail(e.target.value);
  const handleChangePassword = (e) => setPassword(e.target.value);

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
        largeScreen={3}
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
          <Button
            className="form__btn"
            onClick={() => onLogInClick(email, password)}
          >
            Zaloguj się
          </Button>
        </Form>
      </Grid.Column>
    </Grid>
  );
};

export default LoginForm;
