import React, { useState, useEffect } from "react";
import "./App.css";
import AppbarReact from "./Components/Menu/AppbarReact";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AddRoute from "./pages/AddRoute";
import Favourites from "./pages/Favourites";
import FavouritesDetails from "./pages/FavouritesDetails";
import Search from "./pages/Search";
import Default from "./pages/Default";
import Home from "./pages/home/Home";
import mapObjectToArray from "./Components/mapObjectToArray";

const API_URL = "https://isa-crossroads.firebaseio.com/places/.json";

const userId = "HIzaxWzJ6vaL69fSJxEPnP4LQWD3";

const FAVS_URL =
  "https://isa-crossroads.firebaseio.com/users/userId/favourites/.json"; //muszę ustawić zmieniający się user Id // token // uid

const App = () => {
  const [places, setPlaces] = useState([]);
  const [favPlaces, setFavPlaces] = useState([]);

  useEffect(() => {
    async function fetchData() {
      return fetch(API_URL)
        .then((response) => response.json())
        .then((placesObject) => {
          const placesArray = mapObjectToArray(placesObject);
          setPlaces(placesArray);
        });
    }
    fetchData();
  }, []);

  useEffect(() => {
    fetch(
      `https://isa-crossroads.firebaseio.com/users/${userId}/favourites` +
        ".json"
    )
      .then((response) => response.json())
      .then((placesObject) => {
        return placesObject ? setFavPlaces(placesObject) : [];
      });
  }, []);

  useEffect(() => {
    fetch(
      `https://isa-crossroads.firebaseio.com/users/${userId}/favourites` +
        ".json",
      {
        method: "PUT",
        body: JSON.stringify(favPlaces),
      },
      [favPlaces]
    );
  });

  const addToFav = (event) => {
    return favPlaces.includes(event.target.id)
      ? null
      : setFavPlaces([...favPlaces, event.target.id]);
  };

  const delFromFav = (event) => {
    const favPlacesCopy = [...favPlaces];
    const delIndex = favPlacesCopy.indexOf(event.target.id);
    favPlacesCopy.splice(delIndex, 1);

    return setFavPlaces(favPlacesCopy);
  };

  return (
    <BrowserRouter>
      <AppbarReact />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Home places={places} />
          </Route>
          <Route exact path="/search">
            <Search
              places={places}
              favPlaces={favPlaces}
              onFavBtnClick={addToFav}
              onDelFavBtnClick={delFromFav}
            />
          </Route>
          <Route exact path="/favourites">
            <Favourites
              places={places}
              onFavBtnClick={addToFav}
              favPlaces={favPlaces}
              onDelFavBtnClick={delFromFav}
            />
          </Route>
          <Route exact path="/favouritesdetails">
            <FavouritesDetails />
          </Route>
          <Route exact path="/addroute">
            <AddRoute />
          </Route>
          <Route>
            <Default />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
