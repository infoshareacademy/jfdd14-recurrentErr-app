import React, { useContext } from "react";
import { Icon, Modal, Grid } from "semantic-ui-react";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";
import { LoginContext } from "../../context/LoginContext";

const shareUrl = "http://app.recurrenterr.jfdd14.is-academy.pl/";
const title = "Crossroads, z tą aplikacją znalazłem fajne przechadzki.";

const ShareModal = (props) => {
  const contextLogin = useContext(LoginContext);
  return (
    <Modal
      size="tiny"
      open={props.openModal}
      onClose={props.closeModal}
      closeIcon
    >
      {contextLogin.isLoggedIn ? (
        <React.Fragment>
          <Modal.Header>Udostępnij aplikację znajomym</Modal.Header>
          <Modal.Content>
            <Grid columns={15} textAlign="center">
              <Grid.Column width={5}>
                <FacebookShareButton
                  url={shareUrl}
                  quote={title}
                  onClick={props.closeModal}
                >
                  <Icon name="facebook" size="huge" />
                </FacebookShareButton>
              </Grid.Column>
              <Grid.Column width={5}>
                <LinkedinShareButton
                  url={shareUrl}
                  quote={title}
                  onClick={props.closeModal}
                >
                  <Icon name="linkedin" size="huge" />
                </LinkedinShareButton>
              </Grid.Column>
              <Grid.Column width={5}>
                <TwitterShareButton
                  url={shareUrl}
                  quote={title}
                  onClick={props.closeModal}
                >
                  <Icon name="twitter square" size="huge" />
                </TwitterShareButton>
              </Grid.Column>
            </Grid>
          </Modal.Content>
        </React.Fragment>
      ) : (
        <Modal.Header>Musisz być zalogowany</Modal.Header>
      )}
    </Modal>
  );
};

export default ShareModal;
