import React, { Component } from "react";
import { Button, Header, Image, Modal } from "semantic-ui-react";

function Details(props) {
  return (
    <div>
      <Modal open={props.open} onClose={() => props.closeModal}>
        <Modal.Header>Select a Photo</Modal.Header>
        <Modal.Content image>
          <Image
            wrapped
            size="medium"
            src="https://react.semantic-ui.com/images/avatar/large/rachel.png"
          />
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
          <Button color="black" onClick={() => props.closeModal}>
            Nope
          </Button>
          <Button
            positive
            icon="checkmark"
            labelPosition="right"
            content="Yep, that's me"
            onClick={() => props.closeModal}
          />
        </Modal.Actions>
      </Modal>
    </div>
  );
}

export default Details;
