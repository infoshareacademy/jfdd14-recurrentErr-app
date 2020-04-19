import React, { Component } from "react";
import { Menu, Responsive, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import SidebarReact from "./SidebarReact";
import ShareModal from "../shareModal/ShareModal.component";
import { logOut } from "../SignIn/SignIn";
import logo from "../logo/logoBW.png";
import "./sidebar.css";

class AppbarReact extends Component {
  state = {
    sidebarVisible: false,
    openModal: false,
  };

  handleModal = () => {
    this.changeMenuVisibility();
    this.setState({ openModal: true });
  };

  closeModal = () => this.setState({ openModal: false });

  changeMenuVisibility = () => {
    this.setState({
      sidebarVisible: !this.state.sidebarVisible,
    });
  };

  handleClick = () => {
    return this.props.loggedIn ? logOut() : null;
  };

  render() {
    const { sidebarVisible, openModal } = this.state;

    return (
      <React.Fragment>
        <ShareModal openModal={openModal} closeModal={this.closeModal} />

        <Menu stackable>
          <Responsive
            as={Menu.Item}
            maxWidth={767}
            icon="bars"
            active
            onClick={this.changeMenuVisibility}
          ></Responsive>
          <Menu.Item as={Link} to="/" name="crossRoads" active>
            <img src={logo} alt="logo" /> crossRoads
          </Menu.Item>
          <Menu.Item
            as={Link}
            to="/login"
            active
            position="right"
            onClick={this.handleClick}
            style={{ justifyContent: "flex-end" }}
          >
            <Responsive
              circular
              as={Button}
              color="black"
              icon="user circle"
              {...Responsive.onlyMobile}
            />
            <Responsive
              as={Button}
              color="black"
              content={this.props.loggedIn ? "Wyloguj" : "Zaloguj"}
              minWidth={Responsive.onlyTablet.minWidth}
            />
          </Menu.Item>
        </Menu>

        <Responsive
          as={SidebarReact}
          visibility={sidebarVisible || true}
          minWidth={768}
          handleModal={this.handleModal}
        />
        <Responsive
          as={SidebarReact}
          visibility={sidebarVisible}
          maxWidth={767}
          changeMenuVisibility={this.changeMenuVisibility}
          handleModal={this.handleModal}
        />
      </React.Fragment>
    );
  }
}

export default AppbarReact;
