import React, { Component } from "react";
import {
  Button,
  Checkbox,
  Form,
  Input,
  Radio,
  Select,
  TextArea,
  Header,
} from "semantic-ui-react";

const options = [
  { key: "easy", text: "Łatwy", value: "Łatwy" },
  { key: "middle", text: "Średni", value: "Średni" },
  { key: "difficult", text: "Trudny", value: "Trudny" },
];

class AddRoute extends Component {
  state = {
    averageSpeedV: "",
    cityV: "",
    distanceV: "",
    levelV: "",
    nameV: "",
    photoV: "",
    timeV: "",
    descriptionV: "",
    routes: [],
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
  handleChangeDescription = (e) => {
    this.setState({ descriptionV: e.target.value });
  };

  handleChange = (e, { value }) => this.setState({ value });

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
          description: this.state.descriptionV,
        },
      ],
      averageSpeedV: "",
      distanceV: "",
      nameV: "",
      photoV: "",
      timeV: "",
      descriptionV: "",
    });
    e.preventDefault();
  };

  renderRoutes = () =>
    this.state.routes.map((route) => (
      <div key={route.name}>
        <h2>Nazwa trasy: {route.name}</h2>
        <h4>Dystans: {route.distance} km</h4>
        <h4>Czas trwania: {route.time}min</h4>
        <h4>Tempo: {route.speed}km/min</h4>
        <h4>Zdjęcie: {route.photo}</h4>

        <p>Krótki opis: {route.description}</p>
      </div>
    ));

  render() {
    const { value } = this.state;
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
              label="Nazwa trasy"
              placeholder="Wpisz nazwę trasy"
              value={this.state.nameV}
              onChange={this.handleChangeName}
            />
            <Form.Field
              control={Input}
              label="Dystans (km)"
              placeholder="Podaj długość trasy"
              value={this.state.distanceV}
              onChange={this.handleChangeDistance}
            />
            <Form.Field
              control={Select}
              label="Poziom trudności"
              options={options}
              placeholder="Poziom trudności"
            />
          </Form.Group>
          <Form.Group inline>
            <label>Miasto</label>
            <Form.Field
              control={Radio}
              label="Gdańsk"
              value="1"
              checked={value === "1"}
              onChange={this.handleChange}
            />
            <Form.Field
              control={Radio}
              label="Sopot"
              value="2"
              checked={value === "2"}
              onChange={this.handleChange}
            />
            <Form.Field
              control={Radio}
              label="Gdynia"
              value="3"
              checked={value === "3"}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group widths="2">
            <Form.Field
              control={Input}
              label="Zdjęcie"
              placeholder="Podaj link URL"
              value={this.state.photoV}
              onChange={this.handleChangePhoto}
            />
            <Form.Field
              control={Input}
              label="Czas trwania"
              placeholder="Wpisz czas trwania"
              value={this.state.timeV}
              onChange={this.handleChangeTime}
            />
          </Form.Group>
          <Form.Field
            control={TextArea}
            label="Opis trasy"
            placeholder="Opisz krótko trasę..."
            value={this.state.descriptionV}
            onChange={this.handleChangeDescription}
          />
          <Form.Field
            control={Checkbox}
            label="Zapoznałam/em się z warunkami korzystania ze strony"
          />
          <Form.Field control={Button}>Dodaj</Form.Field>
        </Form>
        {this.renderRoutes()}
      </div>
    );
  }
}

export default AddRoute;
