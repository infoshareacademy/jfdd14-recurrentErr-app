import React, { Component } from "react";
import { Menu, Responsive } from "semantic-ui-react";
import { Link } from "react-router-dom";
import SidebarReact from "./SidebarReact";
import SidebarReactHamburger from "./SidebarReactHamburger";
import logo from "../logo/logoBW.png";
import "./sidebar.css";

class AppbarReact extends Component {
  state = {
    sidebarVisible: false,
  };

  changeMenuVisibility = () => {
    this.setState({
      sidebarVisible: !this.state.sidebarVisible,
    });
  };
  render() {
    const { sidebarVisible } = this.state;

    return (
      <React.Fragment>
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

          <Responsive
            as={Menu.Item}
            minWidth={768}
            to="/"
            name="Zaloguj"
            active
            position="right"
          >
            Logowanie
          </Responsive>
          <Responsive
            as={Menu.Item}
            maxWidth={767}
            icon="user circle"
            active
          ></Responsive>
        </Menu>

        <Responsive
          as={SidebarReact}
          visibility={sidebarVisible}
          minWidth={768}
        />
        <Responsive
          as={SidebarReactHamburger}
          visibility={sidebarVisible}
          maxWidth={767}
        />
      </React.Fragment>
    );
  }
}

export default AppbarReact;
