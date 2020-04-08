import React, { Component } from "react";
import AddRoute from "../../pages/AddRoute";

class Added extends Component {
  state = { showModal: false };

  onClickHandle = () => {
    this.setState({ showModal: true });
  };

  render() {
    console.log(this.state.showModal);
    return (
      <div>
        <AddRoute
          showModal={this.state.showModal}
          handleClick={this.onClickHandle}
        />
      </div>
    );
  }
}

export default Added;
