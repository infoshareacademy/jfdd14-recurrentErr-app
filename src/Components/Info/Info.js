import React from "react";
import { Header, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./Info.css";

function Info() {
  return (
    <div className="info__container">
      <Header as="h2">Witamy Wędrowcze!</Header>
      <Header as="h3">
        Jesteś nowy w Trójmieście?
        <br></br>
        Nie masz pomysłu na lokalną przechadzkę?
      </Header>
      <Header as="h4">
        crossRoads to aplikacja, dzięki której w łatwy sposób{" "}
        <Link to="/search" className="info__link">
          odnajdziesz
        </Link>{" "}
        trasę dostosowaną do Twoich preferencji. Możesz także{" "}
        <Link to="/addroute" className="info__link">
          dodać
        </Link>{" "}
        nową trasę, którą będzie się cieszyć reszta społeczności crossRoads.
      </Header>
      <br></br>
      <Button secondary className="info__container__button">
        Zaloguj się
      </Button>
    </div>
  );
}

export default Info;
