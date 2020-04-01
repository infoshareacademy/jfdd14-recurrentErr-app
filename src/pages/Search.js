import React, { useState } from "react";
import { Breadcrumb } from "semantic-ui-react";

import SearchForm from "../Components/Search/SearchForm";
import SearchList from "../pages/SearchList";
import Details from "../pages/Details";

import { BrowserRouter as Route, Switch, Link } from "react-router-dom";

function Search(props) {
  const [searchParam, setSearchParam] = useState([]);
  const [searchlistReqest, setSearchListRequest] = useState(false);
  const [detailReqest, setDetailRequest] = useState(false);
  const [activeBreadcrumb, setActiveBreadcrumb] = useState([
    true,
    false,
    false,
  ]);

  const searchRoute = () => {
    setSearchListRequest(true);
    setActiveBreadcrumb([false, true, false]);
    props.history.push("/search/searchlist");
  };

  const clickDetails = () => {
    setDetailRequest(true);
    setActiveBreadcrumb([false, false, true]);
    console.log("klik");
    props.history.push("/search/searchlist/details");
  };

  return (
    <React.Fragment>
      <Breadcrumb>
        <Breadcrumb.Section
          as={Link}
          to="/search/"
          active={activeBreadcrumb[0]}
          onClick={() => setActiveBreadcrumb([true, false, false])}
        >
          Wyszukaj
        </Breadcrumb.Section>
        {searchlistReqest ? (
          <React.Fragment>
            <Breadcrumb.Divider icon="right angle" />
            <Breadcrumb.Section
              as={Link}
              to="/search/searchlist"
              active={activeBreadcrumb[1]}
              onClick={() => setActiveBreadcrumb([false, true, false])}
            >
              Wyniki wyszukiwania dla:
            </Breadcrumb.Section>
            {detailReqest ? (
              <React.Fragment>
                <Breadcrumb.Divider />
                <Breadcrumb.Section
                  as={Link}
                  to="/search/searchlist/details"
                  active={activeBreadcrumb[2]}
                  onClick={() => setActiveBreadcrumb([false, false, true])}
                >
                  Szczegóły
                </Breadcrumb.Section>
              </React.Fragment>
            ) : null}
          </React.Fragment>
        ) : null}
      </Breadcrumb>

      <Switch>
        <Route exact path="/search">
          <SearchForm onClickSubmit={searchRoute} />
        </Route>
        <Route exact path="/search/searchlist">
          <SearchList />
        </Route>
        <Route exact path="/search/searchlist/details">
          <Details onClickDetails={clickDetails} />
        </Route>
      </Switch>
    </React.Fragment>
  );
}

export default Search;
