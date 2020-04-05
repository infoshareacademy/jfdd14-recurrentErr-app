import React, { Component } from "react";
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
        <Modal.Header>""</Modal.Header>
        <Modal.Content image>
          <Image wrapped size="medium" src="" />
          <Modal.Description>
            <Header>Default Profile Image</Header>
            <p>
              We've found the following gravatar image associated with your
              e-mail address.
            </p>
            <p>Is it okay to use this photo?</p>
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
