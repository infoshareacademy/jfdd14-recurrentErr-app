import React from "react";
import { Breadcrumb } from "semantic-ui-react";
import SearchForm from "../Components/Search/SearchForm";
import SearchList from "../pages/SearchList";
import {
  BrowserRouter as Route,
  Switch,
  Link,
  NavLink,
} from "react-router-dom";

function Search() {
  return (
    <React.Fragment>
      <Breadcrumb>
        <Breadcrumb.Section>Wyszukaj</Breadcrumb.Section>
      </Breadcrumb>

      <Switch>
        <Route exact path="/search" component={SearchForm} />
        <Route exact path="/search/searchlist" component={SearchList} />
      </Switch>
    </React.Fragment>
  );
}

export default Search;
