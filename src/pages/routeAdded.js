import React, { Component } from "react";
import routeData from "./routeData";
import "../Components/Search/searchList.css";

class RouteList extends Component {
  renderRoutes = () =>
    routeData.map((route) => (
      <div className="cards_item" key={route.timestamp}>
        <div className="card">
          <div className="card_content">
            <p className="card_title"> {route.routeName}</p>
            <img alt={route.routeName} src={route.photo} />

            <p className="card_text">
              Miasto: {route.city} || Dystans: {route.distance}km
            </p>

            <p className="card_text">Poziom trudności: {route.level}</p>
            <p className="card_text">Czas trwania: {route.time} min</p>
            <p className="card_text">Opis trasy: {route.description}</p>
          </div>
        </div>
      </div>
    ));

  render() {
    return <div>{this.renderRoutes()}</div>;
  }
}

export default RouteList;
