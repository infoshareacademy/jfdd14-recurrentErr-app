import React from "react";
import { Header, Grid, Form } from "semantic-ui-react";
import SearchSlider from "../Components/SearchForm/SearchSlider";

const diffOpt = [
  { key: "ez", value: "easy", text: "Łatwa" },
  { key: "it", value: "intermediate", text: "Średnia" },
  { key: "hr", value: "hard", text: "Trudna" },
];

function Search() {
  return (
    <React.Fragment>
      <Grid centered padded>
        <Grid.Column as={Form} width={8} verticalAlign="middle">
          <Header as="h2">Wyszukaj trasę:</Header>
          <Form.Input action="Search" placeholder="Search..." />
          <Form.Select
            placeholder="Wybierz poziom trudności trasy"
            options={diffOpt}
          />
          <SearchSlider />
        </Grid.Column>
      </Grid>
    </React.Fragment>
  );
}

export default Search;
