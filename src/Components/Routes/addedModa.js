import React, { Component } from "react";
import { Button, Header, Modal } from "semantic-ui-react";

class RouteAdded extends Component {
  state = { showModal: false };

  onClickHandle = () => {
    this.setState({ showModal: true });
  };

  render() {
    return <div>hi</div>;
  }
}
export default RouteAdded;
