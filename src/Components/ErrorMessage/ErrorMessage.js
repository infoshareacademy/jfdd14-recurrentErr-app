import React from "react";
import { Grid, Header, Message, Icon } from "semantic-ui-react";

function ErrorMessage(props) {
  return (
    <Message negative>
      <Grid stackable columns={2}>
        <Header as="h5" className="form__message__header">
          <Icon name="warning circle" size="large" />
          {props.children}
        </Header>
      </Grid>
    </Message>
  );
}

export default ErrorMessage;
