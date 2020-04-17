import React, { useState } from "react";
import { Button, Form, Grid, Card, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "../Search/SearchForm.css";
import "../LoginForm/LoginForm.css";

const RegisterForm = ({ onSignUpClick }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmed, setPasswordConfirmed] = useState("");

  const handleChangeEmail = (e) => setEmail(e.target.value);
  const handleChangePassword = (e) => setPassword(e.target.value);

  const handleChangePasswordConfirmed = (e) =>
    setPasswordConfirmed(e.target.value);

  const comparePasswords = () => {
    const popUpInfo = password !== passwordConfirmed ? alert("Hasła są inne!") : null;
    return popUpInfo;
  };

  //   const handleOnClick = (email, password) => {
  //     onSignUpClick(email, password);
  //   };

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
          <Header as="h5" textAlign="left" style={{ opacity: ".5" }}>
            Rejestrując się, potwierdzasz przeczytanie i akceptację warunków
            usługi i polityki prywatności.
          </Header>
          <Button
            className="form__btn"
            onClick={() => onSignUpClick(email, password)}
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
