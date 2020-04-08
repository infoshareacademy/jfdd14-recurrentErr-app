import React, { Component } from "react";
import { Icon, Menu, Sidebar } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./sidebar.css";

class SidebarReactHamburger extends Component {
  render() {
    const visibility = this.props.visibility;
    return (
      <Sidebar
        as={Menu}
        animation="push"
        icon="labeled"
        inverted
        vertical
        visible={visibility ? true : false}
        width="thin"
      >
        <Menu.Item as={Link} to="/">
          <Icon name="home" />
          <div className="sidebarText">Home</div>
        </Menu.Item>

        <Menu.Item as={Link} to="/search">
          <Icon name="search" />
          <div className="sidebarText">Wyszukaj</div>
        </Menu.Item>

        <Menu.Item as={Link} to="/favourites">
          <Icon name="thumbs up" />
          <div className="sidebarText">Ulubione</div>
        </Menu.Item>

        <Menu.Item as={Link} to="/addroute">
          <Icon name="plus" />
          <div className="sidebarText">Dodaj trasę</div>
        </Menu.Item>

        <Menu.Item as={Link} to="/info">
          <Icon name="info circle" />
          <div className="sidebarText">Informacje</div>
        </Menu.Item>
      </Sidebar>
    );
  }
}

export default SidebarReactHamburger;
