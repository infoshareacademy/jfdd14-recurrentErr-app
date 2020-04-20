import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Redirect } from "react-router-dom";
import AppbarReact from "./Components/Menu/AppbarReact";
import AddRoute from "./pages/AddRoute";
import Favourites from "./pages/Favourites";
import FavouritesDetails from "./pages/FavouritesDetails";
import Search from "./pages/Search";
import Default from "./pages/Default";
import Home from "./pages/home/Home";
import Auth from "./Components/Auth/Auth";
import Register from "./Components/Register/Register";
import mapObjectToArray from "./Components/mapObjectToArray";
import { isTokenInStorage } from "./Components/SignIn/SignIn";
import { LoginContext } from "./context/LoginContext";
import "./App.css";

const API_URL = "https://isa-crossroads.firebaseio.com/places/.json";
const REFRESH_INTERVAL = 2000;

const userId = localStorage.getItem("localId");

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(isTokenInStorage());
  const [places, setPlaces] = useState([]);
  const [favPlaces, setFavPlaces] = useState([]);

  const contextLogin = {
    isLoggedIn,
    setLoggedIn,
  };

  const getFavs = () => {
    return fetch(
      `https://isa-crossroads.firebaseio.com/users/${userId}/favourites` +
        ".json"
    )
      .then((response) => response.json())
      .then((placesObject) => {
        return placesObject ? setFavPlaces(placesObject) : [];
      });
  };

  const getPlaces = () => {
    async function fetchData() {
      return fetch(API_URL)
        .then((response) => response.json())
        .then((placesObject) => {
          const placesArray = mapObjectToArray(placesObject);
          setPlaces(placesArray);
        });
    }
    fetchData();
  };

  useEffect(() => {
    getPlaces();
    getFavs();

    const id = setInterval(() => {
      getPlaces();
      getFavs();
    }, REFRESH_INTERVAL);
    return () => {
      clearInterval(id);
    };
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
      <LoginContext.Provider value={contextLogin}>
        <AppbarReact loggedIn={isLoggedIn} />
        <div className="container">
          <Switch>
            <Route exact path="/">
              <Home places={places} loggedIn={isLoggedIn} />
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
              {isLoggedIn ? (
                <Favourites
                  places={places}
                  onFavBtnClick={addToFav}
                  favPlaces={favPlaces}
                  onDelFavBtnClick={delFromFav}
                />
              ) : (
                <Redirect to="/login"></Redirect>
              )}
            </Route>
            <Route exact path="/favouritesdetails">
              <FavouritesDetails />
            </Route>
            <Route exact path="/addroute">
              {isLoggedIn ? <AddRoute /> : <Redirect to="/login"></Redirect>}
            </Route>
            <Route exact path="/login">
              <Auth />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route>
              <Default />
            </Route>
          </Switch>
        </div>
      </LoginContext.Provider>
    </BrowserRouter>
  );
};

export default App;
