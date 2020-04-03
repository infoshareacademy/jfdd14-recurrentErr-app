import React, { Component } from "react";
import {
  Button,
  Checkbox,
  Form,
  Input,
  Select,
  TextArea,
  Header,
} from "semantic-ui-react";

const options = [
  { key: "1", text: "Łatwy", value: "Łatwy" },
  { key: "2", text: "Średni", value: "Średni" },
  { key: "3", text: "Trudny", value: "Trudny" },
];

class AddRoute extends Component {
  state = {
    name: "",
    averageSpeedV: "",
    cityV: "",
    distanceV: "",
    nameV: "",
    photoV: "",
    timeV: "",
    descriptionV: "",
    routes: [],
    levelV: "",
    chBox: false,
  };

  handleChangeDistance = (e) => {
    this.setState({ distanceV: e.target.value });
  };

  handleChangeName = (e) => {
    this.setState({ nameV: e.target.value });
  };

  handleChangeAvSpeed = (e) => {
    this.setState({ averageSpeedV: e.target.value });
  };
  handleChangePhoto = (e) => {
    this.setState({ photoV: e.target.value });
  };

  handleChangeTime = (e) => {
    this.setState({ timeV: e.target.value });
  };
  handleChangeCity = (e) => {
    this.setState({ cityV: e.target.value });
  };
  handleChangeLevel = (e) => {
    this.setState({ levelV: e.target.value });
  };
  handleChangeDescription = (e) => {
    this.setState({ descriptionV: e.target.value });
  };

  handleChange = (e, { value }) => this.setState({ levelV: value });

  handleCheckboxChange = (e, { checked, name }) =>
    this.setState({ [name]: checked });

  handleSubmit = (e) => {
    this.setState({
      routes: [
        ...this.state.routes,
        {
          distance: this.state.distanceV,
          name: this.state.nameV,
          time: this.state.timeV,
          speed: this.state.averageSpeedV,
          photo: this.state.photoV,
          city: this.state.cityV,
          level: this.state.levelV,
          description: this.state.descriptionV,
        },
      ],
      averageSpeedV: "",
      distanceV: "",
      nameV: "",
      photoV: "",
      timeV: "",
      cityV: "",
      levelV: "",
      descriptionV: "",
      chBox: false,
    });
    e.preventDefault();
  };

  renderRoutes = () =>
    this.state.routes.map((route) => (
      <div key={route.name}>
        <h2>Nazwa trasy: {route.name}</h2>
        <p>Miasto: {route.city}</p>
        <p>Dystans: {route.distance} km</p>
        <p>Poziom trudności: {route.level}</p>
        <p>Zdjęcie: {route.photo}</p>
        <p>Czas trwania: {route.time} min</p>
        <p>Opis trasy: {route.description}</p>
      </div>
    ));

  render() {
    // const { value } = this.state;
    const submittNow = this.state.chBox ? (
      <Form.Field control={Button}>Dodaj</Form.Field>
    ) : null;

    return (
      <div>
        <Form style={{ margin: 20 }} onSubmit={this.handleSubmit}>
          <Header as="h2" verticalAlign="middle">
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
              value={this.state.nameV}
              onChange={this.handleChangeName}
              required
            />
            <Form.Field
              name="city"
              control={Input}
              label="Miasto"
              placeholder="Wpisz nazwę miejsca"
              value={this.state.cityV}
              onChange={this.handleChangeCity}
              required
            />
            <Form.Field
              name="distance"
              control={Input}
              label="Dystans (km)"
              placeholder="Podaj długość trasy"
              value={this.state.distanceV}
              onChange={this.handleChangeDistance}
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
              value={this.state.levelV}
              onChange={this.handleChange}
            />
            <Form.Field
              name="photo"
              control={Input}
              label="Zdjęcie"
              placeholder="Podaj link URL"
              value={this.state.photoV}
              onChange={this.handleChangePhoto}
            />
            <Form.Field
              name="time"
              control={Input}
              label="Czas trwania"
              placeholder="Wpisz czas trwania"
              value={this.state.timeV}
              onChange={this.handleChangeTime}
            />
          </Form.Group>
          <Form.Field
            name="description"
            control={TextArea}
            label="Opis trasy"
            placeholder="Opisz krótko trasę..."
            value={this.state.descriptionV}
            onChange={this.handleChangeDescription}
            required
          />
          <Form.Field
            name="chBox"
            required
            control={Checkbox}
            label="Zapoznałam/em się z warunkami korzystania ze strony"
            checked={this.state.chBox}
            onChange={this.handleCheckboxChange}
            // onClick={(props) => props.checked ? this.handleCheckboxChange : alert('Proszę potwierdzić zapoznanie się z warunkami')}
          />

          {submittNow}
        </Form>
        {this.renderRoutes()}
      </div>
    );
  }
}

export default AddRoute;
