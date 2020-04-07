import React, { Component } from "react";
import routeData from "../Components/Routes/routeData";

import {
  Button,
  Checkbox,
  Form,
  Input,
  Select,
  TextArea,
  Header,
  Modal,
} from "semantic-ui-react";

const options = [
  { key: "1", text: "Łatwy", value: "Łatwy" },
  { key: "2", text: "Średni", value: "Średni" },
  { key: "3", text: "Trudny", value: "Trudny" },
];

class AddRoute extends Component {
  state = {
    routeName: "",
    averageSpeed: "",
    city: "",
    distance: "",
    photo: "",
    time: "",
    description: "",
    level: "",
    chBox: false,
    timestamp: Date.now(),
    showModal: false,
  };
  handleChange = (e, { value }) => this.setState({ levelV: value });

  handleNameChange = (e, { value, name }) => this.setState({ [name]: value });
  handleCheckboxChange = (e, { checked, name }) =>
    this.setState({ [name]: checked });

  addToData = () => routeData.push(this.state);
  jsonToLocalStorage = () =>
    localStorage.setItem("routeData", JSON.stringify(routeData));

  resetState = () =>
    this.setState({
      averageSpeed: "",
      distance: "",
      name: "",
      routeName: "",
      photo: "",
      time: "",
      city: "",
      level: "",
      description: "",
      timestamp: "",
      chBox: false,
      showModal: false,
    });

  handleSubmit = () => {
    this.addToData();
    this.jsonToLocalStorage();
    this.resetState();
  };

  ModalHandle = () => {
    this.setState({ showModal: true });
  };
  render() {
    const submitNow =
      this.state.chBox &&
      this.state.routeName &&
      this.state.city &&
      this.state.distance ? (
        <Form.Field control={Button}>Dodaj</Form.Field>
      ) : (
        <Button disabled>Dodaj</Button>
      );

    return (
      <div>
        <Form style={{ margin: 20 }} onSubmit={this.handleSubmit}>
          <Header as="h2">
            Dodaj nową trasę!
            <Header.Subheader>
              Wypełnij poniższy formularz, a następnie dodaj swoją trasę!
            </Header.Subheader>
          </Header>

          <Form.Group widths="equal">
            <Form.Field
              control={Input}
              name="routeName"
              label="Nazwa trasy"
              placeholder="Wpisz nazwę trasy"
              value={this.state.routeName}
              onChange={this.handleNameChange}
              required
            />
            <Form.Field
              name="city"
              control={Input}
              label="Miasto"
              placeholder="Wpisz nazwę miejsca"
              value={this.state.city}
              onChange={this.handleNameChange}
              required
            />
            <Form.Field
              name="distance"
              control={Input}
              label="Dystans (km)"
              placeholder="Podaj długość trasy"
              value={this.state.distance}
              onChange={this.handleNameChange}
              required
            />
          </Form.Group>

          <Form.Group widths="3">
            <Form.Field
              name="level"
              control={Select}
              label="Poziom trudności"
              options={options}
              placeholder="Poziom trudności"
              value={this.state.level}
              onChange={this.handleNameChange}
            />
            <Form.Field
              name="photo"
              control={Input}
              label="Zdjęcie"
              placeholder="Podaj link URL"
              value={this.state.photo}
              onChange={this.handleNameChange}
            />
            <Form.Field
              name="time"
              control={Input}
              label="Czas trwania"
              placeholder="Wpisz czas trwania"
              value={this.state.time}
              onChange={this.handleNameChange}
            />
          </Form.Group>
          <Form.Field
            name="description"
            control={TextArea}
            label="Opis trasy"
            placeholder="Opisz krótko trasę..."
            value={this.state.description}
            onChange={this.handleNameChange}
            required
          />
          <Form.Field
            name="chBox"
            required
            control={Checkbox}
            label="Zapoznałam/em się z warunkami korzystania ze strony"
            checked={this.state.chBox}
            onChange={this.handleCheckboxChange}
          />
          <Modal trigger={submitNow} closeIcon>
            <Header icon="trophy" content="Gratulacje" />
            <Modal.Content>
              <p>Twoja trasa została dodana!</p>
            </Modal.Content>
          </Modal>
        </Form>
      </div>
    );
  }
}

export default AddRoute;
