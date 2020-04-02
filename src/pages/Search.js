import React, { useState } from "react";

import SearchBreadcrumbs from "../Components/Search/SearchBreadcrumbs";
import SearchForm from "../Components/Search/SearchForm";
import SearchList from "../pages/SearchList";
import Details from "../pages/Details";

import { BrowserRouter as Route, Switch } from "react-router-dom";

function Search(props) {
  // const [searchParam, setSearchParam] = useState([]);
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
      <SearchBreadcrumbs
        clickSearchBreadcrumb={() => setActiveBreadcrumb([true, false, false])}
        clickListBreadcrumb={() => setActiveBreadcrumb([false, true, false])}
        clickDetailsBreadcrumb={() => setActiveBreadcrumb([false, false, true])}
        activateSearch={activeBreadcrumb[0]}
        activateList={activeBreadcrumb[1]}
        activateDetails={activeBreadcrumb[2]}
        searchlistReqest={searchlistReqest}
        detailReqest={detailReqest}
      />

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
