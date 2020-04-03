import React from "react";
import { Header, Grid, Card, Form } from "semantic-ui-react";
import SearchSlider from "../Search/SearchSlider";
import "../Search/SearchForm.css";

const difficulty = [
  { value: 1, text: "Łatwa" },
  { value: 2, text: "Średnia" },
  { value: 3, text: "Trudna" },
];

function SearchForm({
  textValue,
  textValidation,
  onChangeText,
  selectValue,
  onChangeSelect,
  onChangeSlider,
  onSearchSubmit,
}) {
  return (
    <React.Fragment>
      <Grid centered padded>
        <Grid.Column textAlign="center" width={16}>
          <Header as="h2">Wyszukaj trasę</Header>
        </Grid.Column>
        <Grid.Column
          as={Card}
          className="cardElements"
          textAlign="center"
          tablet={14}
          computer={8}
          largeScreen={6}
        >
          <Form.Input
            icon="search"
            placeholder="Search..."
            value={textValue}
            onChange={onChangeText}
            style={{ width: "100%" }}
            error={textValidation}
          />
          <Form.Select
            placeholder="Wybierz poziom trudności trasy"
            className="formSelect"
            options={difficulty}
            value={selectValue}
            onChange={onChangeSelect}
          />
          <SearchSlider onChangeSlider={onChangeSlider} />
          <Form.Button type="submit" onClick={onSearchSubmit} secondary>
            Szukaj
          </Form.Button>
        </Grid.Column>
      </Grid>
    </React.Fragment>
  );
}

export default SearchForm;
