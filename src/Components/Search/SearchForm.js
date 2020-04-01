import React from "react";
import { Header, Grid, Card, Form, Label } from "semantic-ui-react";
import SearchSlider from "../Search/SearchSlider";

const diffOpt = [
  { key: "ez", value: "easy", text: "Łatwa" },
  { key: "it", value: "intermediate", text: "Średnia" },
  { key: "hr", value: "hard", text: "Trudna" },
];

function SearchForm() {
  return (
    <React.Fragment>
      <Grid centered padded>
        <Grid.Row>
          <Header as="h2">Wyszukaj trasę:</Header>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column as={Form} width={10} verticalAlign="middle">
            <Card fluid>
              <Form.Input action="Search" placeholder="Search..." />
              <Form.Select
                placeholder="Wybierz poziom trudności trasy"
                options={diffOpt}
              />
              <Label horizontal>Długosc trasy:</Label>
              <SearchSlider />
            </Card>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </React.Fragment>
  );
}

export default SearchForm;
