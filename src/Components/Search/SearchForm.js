import React from "react";
import { Header, Grid, Card, Form, Label, GridColumn } from "semantic-ui-react";
import SearchSlider from "../Search/SearchSlider";
import "../Search/SearchForm.css";

const diffOpt = [
  { key: "ez", value: "easy", text: "Łatwa" },
  { key: "it", value: "intermediate", text: "Średnia" },
  { key: "hr", value: "hard", text: "Trudna" },
];

function SearchForm({
  textValue,
  onChangeText,
  sliderValue,
  onChangeSlider,
  selectValue,
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
          />
          <Form.Select
            className="formSelect"
            placeholder="Wybierz poziom trudności trasy"
            options={diffOpt}
            value={selectValue}
          />
          <SearchSlider value={sliderValue} onChange={onChangeSlider}>
            <p>{`Dystans: 0 - 12.5 km`}</p>
          </SearchSlider>
          <Form.Button type="submit" onClick={onSearchSubmit} secondary>
            Szukaj
          </Form.Button>
        </Grid.Column>
      </Grid>
    </React.Fragment>
  );
}

export default SearchForm;
