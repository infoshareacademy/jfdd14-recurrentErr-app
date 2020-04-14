import React, { Component } from "react";
import { Icon, Menu, Sidebar, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./sidebar.css";

class SidebarReact extends Component {
  render() {
    const { visibility, changeMenuVisibility, handleModal } = this.props;
    return (
      <>
        <Sidebar
          as={Menu}
          animation="push"
          icon="labeled"
          inverted
          vertical
          visible={visibility ? true : false}
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
          <Menu.Item as={Button} onClick={handleModal} className="sidebarShare">
            <Icon name="share alternate" />
            <div className="sidebarText">Udostępnij</div>
          </Menu.Item>
        </Sidebar>
      </>
    );
  }
}

export default SidebarReact;
