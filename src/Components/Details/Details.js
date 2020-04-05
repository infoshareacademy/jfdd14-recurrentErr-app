import React from "react";
import { Button, Header, Image, Modal } from "semantic-ui-react";

function Details(props) {
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
          <Image wrapped size="medium" src={props.item.photoBig} />
          <Modal.Description>
            <Header>Lokalizacja: {props.item.city}</Header>
            <p>
              Informacje o spacerze: dystans: {props.item.distance}km, poziom
              trudności: {props.item.level}
            </p>
            <p>{props.item.description}</p>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color="black" onClick={() => props.closeModal()}>
            Zamknij
          </Button>
          <Button
            positive
            icon="checkmark"
            labelPosition="right"
            content="Dodaj do ulubionych"
            onClick={() => props.closeModal()}
          />
        </Modal.Actions>
      </Modal>
    </div>
  );
}

export default Details;
