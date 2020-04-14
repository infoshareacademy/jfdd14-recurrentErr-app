import React, { useState } from "react";
import { Button, Form, Grid, Card, Header } from "semantic-ui-react";
import "../Search/SearchForm.css";
import "./LoginForm.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Podaj adres email"
          />
          <Form.Input
            className="formInput"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Wprowadź hasło"
          />
          <Button
            className="form__btn"
            onClick={() => console.log(email, password)}
            type="submit"
          >
            Zaloguj się
          </Button>
        </Form>
      </Grid.Column>
    </Grid>
  );
};

export default LoginForm;
