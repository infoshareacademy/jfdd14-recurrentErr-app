import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import logo from "./logo/logoBW.png";
import "./sidebar.css";

class AppbarReact extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu stackable>
        <Menu.Item
          name="crossRoads"
          active={activeItem === "crossRoads"}
          onClick={this.handleItemClick}
        >
          <img src={logo} alt="logo" /> crossRoads
        </Menu.Item>

        <Menu.Item
          name="Zaloguj"
          active={activeItem === "Zaloguj"}
          onClick={this.handleItemClick}
          position="right"
        >
          Zaloguj
        </Menu.Item>

        <Menu.Item
          name="Zarejestruj"
          active={activeItem === "Zarejestruj"}
          onClick={this.handleItemClick}
        >
          Zarejestruj
        </Menu.Item>
      </Menu>
    );
  }
}

export default AppbarReact;
