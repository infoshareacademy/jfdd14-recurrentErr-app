import React from "react";
import { Header, Grid, Card, Form, Label } from "semantic-ui-react";
import SearchSlider from "../Search/SearchSlider";
import "../Search/SearchForm.css";

const diffOpt = [
  { key: "ez", value: "easy", text: "Łatwa" },
  { key: "it", value: "intermediate", text: "Średnia" },
  { key: "hr", value: "hard", text: "Trudna" },
];

function SearchForm(props) {
  return (
    <React.Fragment>
      <Grid centered>
        <Grid.Row centered textAlign="center">
          <Header as="h2">Wyszukaj trasę:</Header>
        </Grid.Row>
        <Grid.Row>
          <Form.Field>
            <Form.Input
              icon="search"
              placeholder="Search..."
              value={props.searchValue}
              onChange={props.onChangeSearch}
            />
          </Form.Field>
        </Grid.Row>
        <Grid.Row>
          <Form.Select
            className="formSelect"
            placeholder="Wybierz poziom trudności trasy"
            options={diffOpt}
            value={props.selectValue}
          />
        </Grid.Row>
        <Grid.Row>
          <SearchSlider value={props.sliderValue} />
        </Grid.Row>
        <Grid.Row>
          <Form.Button type="submit" onClick={props.onClickSubmit}>
            Submit
          </Form.Button>
        </Grid.Row>
      </Grid>
    </React.Fragment>
  );
}

export default SearchForm;
