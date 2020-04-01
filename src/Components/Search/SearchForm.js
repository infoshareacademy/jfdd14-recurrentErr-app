import React, { useState } from "react";
import { Button, Header, Grid, Card, Form, Label } from "semantic-ui-react";
import SearchSlider from "../Search/SearchSlider";

const diffOpt = [
  { key: "ez", value: "easy", text: "Łatwa" },
  { key: "it", value: "intermediate", text: "Średnia" },
  { key: "hr", value: "hard", text: "Trudna" },
];

function SearchForm(props) {
  return (
    <React.Fragment>
      <Grid centered padded>
        <Grid.Row>
          <Header as="h2">Wyszukaj trasę:</Header>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column as={Form} width={10} verticalAlign="middle">
            <Card fluid>
              <Form.Field>
                <Form.Input
                  icon="search"
                  placeholder="Search..."
                  value={props.searchValue}
                  onChange={props.onChangeSearch}
                />
              </Form.Field>
              <Button type="submit" onClick={props.onClickSubmit}>
                Submit
              </Button>
              <Form.Select
                placeholder="Wybierz poziom trudności trasy"
                options={diffOpt}
                value={props.selectValue}
              />
              <Label horizontal>Długosc trasy:</Label>
              <SearchSlider value={props.sliderValue} />
            </Card>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </React.Fragment>
  );
}

export default SearchForm;
