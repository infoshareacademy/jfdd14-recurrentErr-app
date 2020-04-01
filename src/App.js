import React, { Component } from "react";
import "./App.css";
import AppbarReact from "./Components/AppbarReact";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AddRoute from "./pages/AddRoute";
import Details from "./pages/Details";
import Favourites from "./pages/Favourites";
import FavouritesDetails from "./pages/FavouritesDetails";
import Search from "./pages/Search";
// import SearchList from "./pages/SearchList";
import Default from "./pages/Default";
import Home from "./pages/Home";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <AppbarReact />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/addroute" component={AddRoute} />
            <Route exact path="/details" component={Details} />
            <Route exact path="/favourites" component={Favourites} />
            <Route
              exact
              path="/favouritesdetails"
              component={FavouritesDetails}
            />
            <Route exact path="/search" component={Search} />
            {/* <Route exact path="/searchlist" component={SearchList} /> */}
            <Route component={Default} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
