import React from "react";
import { Header, Grid, Form, Dropdown } from "semantic-ui-react";
import "../Search/SearchForm.css";

const options = [
  { key: "easy", text: "łatwy", value: "łatwy" },
  { key: "intermediate", text: "średni", value: "średni" },
  { key: "hard", text: "trudny", value: "trudny" },
];

function SearchForm({
  textValue,
  sliderValue,
  dropdownValue,
  onChangeText,
  onChangeDropdown,
  onChangeSlider,
}) {
  return (
    <Grid centered padded>
      <Grid.Column textAlign="center" width={16}>
        <Header as="h2">Wyszukaj trasę</Header>
      </Grid.Column>
      <Grid.Column
        className="cardElements"
        textAlign="center"
        tablet={15}
        computer={8}
        largeScreen={6}
      >
        <Form.Input
          icon="search"
          name="textValue"
          className="formInput"
          placeholder="Gdzie chcesz pójść..."
          value={textValue}
          onChange={onChangeText}
          style={{ width: "90%" }}
        />
        <p className="label">Poziom trudności przechadzki</p>

        <Dropdown
          placeholder="-wybierz-"
          style={{ width: "90%" }}
          multiple
          selection
          options={options}
          value={dropdownValue}
          onChange={onChangeDropdown}
          className="formSelect"
        />

        <p className="label">{`Czas jaki chcesz przeznaczyć na przechadzkę to ${sliderValue} minut`}</p>
        <div className="slidecontainer">
          <input
            type="range"
            min={0}
            max={400}
            step={5}
            value={sliderValue}
            onChange={onChangeSlider}
            className="slider"
            name="sliderValue"
          />
        </div>
      </Grid.Column>
    </Grid>
  );
}

export default SearchForm;
