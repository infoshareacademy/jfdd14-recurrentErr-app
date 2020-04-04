import React from "react";
import { Header, Grid, Card, Form } from "semantic-ui-react";
import "../Search/SearchForm.css";

function SearchForm({
  textValue,
  selectValue,
  sliderValue,
  onChangeText,
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
            name="textValue"
            placeholder="Gdzie chcesz pójść..."
            value={textValue}
            onChange={onChangeText}
            style={{ width: "100%" }}
          />
          <p className="label">Poziom trudności przechadzki</p>
          <select
            name="selectValue"
            value={selectValue}
            onChange={onChangeSelect}
            className="dropdown"
          >
            <option value={0}>-wybierz-</option>
            <option value={1}>Łatwy</option>
            <option value={2}>Średni</option>
            <option value={3}>Trudny</option>
          </select>
          <p className="label">{`Czas trwania przechadzki: ${sliderValue} minut`}</p>
          <div className="slidecontainer">
            <input
              type="range"
              min={0}
              max={240}
              step={5}
              value={sliderValue}
              onChange={onChangeSlider}
              className="slider"
              name="sliderValue"
            />
          </div>

          <Form.Button type="submit" onClick={onSearchSubmit}>
            Szukaj
          </Form.Button>
        </Grid.Column>
      </Grid>
    </React.Fragment>
  );
}

export default SearchForm;
