import React, { Component } from "react";
import { Icon, Menu, Sidebar, Modal, Button, Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./sidebar.css";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";

const shareUrl = "http://app.recurrenterr.jfdd14.is-academy.pl/";
const title = "Crossroads, z tą aplikacją znalazłem fajne przechadzki.";

class SidebarReact extends Component {
  state = {
    openModal: false,
  };

  handleModal = () => {
    this.props.changeMenuVisibility();
    this.setState({ openModal: true });
  };

  closeModal = () => this.setState({ openModal: false });

  render() {
    const { openModal } = this.state;
    const { visibility, changeMenuVisibility } = this.props;
    return (
      <>
        <Modal size="tiny" open={openModal} onClose={this.closeModal}>
          <Modal.Header>Udostępnij aplikację znajomym</Modal.Header>
          <Modal.Content>
            <Grid columns={15} textAlign="center">
              <Grid.Column width={5}>
                <FacebookShareButton url={shareUrl} quote={title}>
                  <Icon name="facebook" size="huge" />
                </FacebookShareButton>
              </Grid.Column>
              <Grid.Column width={5}>
                <LinkedinShareButton url={shareUrl} quote={title}>
                  <Icon name="linkedin" size="huge" />
                </LinkedinShareButton>
              </Grid.Column>
              <Grid.Column width={5}>
                <TwitterShareButton url={shareUrl} quote={title}>
                  <Icon name="twitter square" size="huge" />
                </TwitterShareButton>
              </Grid.Column>
            </Grid>
          </Modal.Content>
        </Modal>

        <Sidebar
          as={Menu}
          animation="push"
          icon="labeled"
          inverted
          vertical
          visible={visibility ? false : true}
          width="thin"
        >
          <Menu.Item as={Link} to="/" onClick={changeMenuVisibility}>
            <Icon name="home" />
            <div className="sidebarText">Home</div>
          </Menu.Item>

          <Menu.Item as={Link} to="/search" onClick={changeMenuVisibility}>
            <Icon name="search" />
            <div className="sidebarText">Wyszukaj</div>
          </Menu.Item>

          <Menu.Item as={Link} to="/favourites" onClick={changeMenuVisibility}>
            <Icon name="thumbs up" />
            <div className="sidebarText">Ulubione</div>
          </Menu.Item>

          <Menu.Item as={Link} to="/addroute" onClick={changeMenuVisibility}>
            <Icon name="plus" />
            <div className="sidebarText">Dodaj trasę</div>
          </Menu.Item>
          <Menu.Item
            as={Button}
            onClick={this.handleModal}
            className="sidebarShare"
          >
            <Icon name="share alternate" />
          </Menu.Item>
        </Sidebar>
      </>
    );
  }
}

export default SidebarReact;
