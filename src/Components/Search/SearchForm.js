import React, { useState } from "react";
import { Header, Grid, Card, Form } from "semantic-ui-react";
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
  selectValue,
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
          />
          <Form.Select
            className="formSelect"
            placeholder="Wybierz poziom trudności trasy"
            options={diffOpt}
            value={selectValue}
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
