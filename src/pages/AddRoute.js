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
  state = {};

  handleChange = (e, { value }) => this.setState({ value });

  render() {
    const { value } = this.state;
    return (
      <Form style={{ margin: 20 }}>
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
          />
          <Form.Field
            control={Input}
            label="Dystans (km)"
            placeholder="Podaj długość trasy"
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
          />
          <Form.Field
            control={Input}
            label="Czas trwania"
            placeholder="Wpisz czas trwania"
          />
        </Form.Group>
        <Form.Field
          control={TextArea}
          label="Opis trasy"
          placeholder="Opisz krótko trasę..."
        />
        <Form.Field
          control={Checkbox}
          label="Zapoznałam/em się z warunkami korzystania ze strony"
        />
        <Form.Field control={Button}>Dodaj</Form.Field>
      </Form>
    );
  }
}

export default AddRoute;
