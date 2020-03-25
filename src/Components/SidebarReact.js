import React from "react";
import { Icon, Menu, Segment, Sidebar } from "semantic-ui-react";
import "./sidebar.css";
import { Link } from "react-router-dom";

const SidebarReact = () => (
  <Sidebar.Pushable as={Segment}>
    <Sidebar
      as={Menu}
      animation="push"
      icon="labeled"
      inverted
      vertical
      visible
      width="thin"
    >
      <Link to="/home">
        <Menu.Item>
          <Icon name="home" />
          <div className="sidebarText">Home</div>
        </Menu.Item>
      </Link>
      <Link to="/search">
        <Menu.Item>
          <Icon name="search" />
          <div className="sidebarText">Wyszukaj</div>
        </Menu.Item>
      </Link>
      <Link to="favourites">
        <Menu.Item>
          <Icon name="thumbs up" />
          <div className="sidebarText">Ulubione</div>
        </Menu.Item>
      </Link>
      <Link to="addroute">
        <Menu.Item>
          <Icon name="plus" />
          <div className="sidebarText">Dodaj trasę</div>
        </Menu.Item>
      </Link>
    </Sidebar>

    <Sidebar.Pusher>
      <Segment basic></Segment>
    </Sidebar.Pusher>
  </Sidebar.Pushable>
);

export default SidebarReact;
