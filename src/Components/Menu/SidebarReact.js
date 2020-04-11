import React, { Component } from "react";
import { Icon, Menu, Sidebar } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./sidebar.css";
import {
  FacebookShareCount,
  FacebookShareButton,
  FacebookIcon,
} from "react-share";

const shareUrl = "http://github.com";
const title = "GitHub";

class SidebarReact extends Component {
  render() {
    const visibility = this.props.visibility;
    return (
      <Sidebar
        as={Menu}
        animation="push"
        icon="labeled"
        inverted
        vertical
        visible={visibility ? false : true}
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

        <Menu.Item>
          <FacebookShareButton url={shareUrl} quote={title}>
            <FacebookIcon size={32} round />
          </FacebookShareButton>

          <div>
            <FacebookShareCount url={shareUrl}>
              {(count) => count}
            </FacebookShareCount>
          </div>
        </Menu.Item>
      </Sidebar>
    );
  }
}

export default SidebarReact;
