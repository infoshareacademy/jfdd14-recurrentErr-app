import React, { useContext } from "react";
import { Button, Header, Image, Modal } from "semantic-ui-react";
import { LoginContext } from "../../context/LoginContext";
import "./details.css";

function Details(props) {
  const contextLogin = useContext(LoginContext);
  const dimmer = true;
  return (
    <div>
      <Modal
        dimmer={dimmer}
        open={props.open}
        onClose={() => props.closeModal()}
      >
        <Modal.Header>"{props.item.name}"</Modal.Header>
        <Modal.Content image>
          <Image size="medium" src={props.item.photoBig} />
          <Modal.Description>
            <Header>Lokalizacja: {props.item.city}</Header>

            <ul>
              <li> Dystans: {props.item.distance} km </li>
              <li> Poziom trudności: {props.item.level}</li>
              <li> Czas trwania: {props.item.time} min </li>
            </ul>
            <p>{props.item.description}</p>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color="black" onClick={() => props.closeModal()}>
            Zamknij
          </Button>
          {contextLogin.isLoggedIn ? (
            props.favPlaces.includes(props.item.key) ? (
              <Button
                color="red"
                icon="x"
                labelPosition="right"
                content="Usuń z ulubionych"
                onClick={props.onDelFavBtnClick}
                id={props.item.key}
              />
            ) : (
              <Button
                color="black"
                icon="checkmark"
                labelPosition="right"
                content="Dodaj do ulubionych"
                onClick={props.onFavBtnClick}
                id={props.item.key}
              />
            )
          ) : null}
        </Modal.Actions>
      </Modal>
    </div>
  );
}

export default Details;
