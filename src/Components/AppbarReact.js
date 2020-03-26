import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import SidebarReact from "./SidebarReact";
import logo from "./logo/logoBW.png";
import "./sidebar.css";

class AppbarReact extends Component {
  state = {
    sidebarVisible: true,
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
          <Menu.Item icon="bars" active onClick={this.changeMenuVisibility} />
          <Menu.Item name="crossRoads" active>
            <img src={logo} alt="logo" /> crossRoads
          </Menu.Item>

          <Menu.Item name="Zaloguj" active position="right">
            Logowanie
          </Menu.Item>
        </Menu>

        <SidebarReact visibility={sidebarVisible} />
      </React.Fragment>
    );
  }
}

export default AppbarReact;
