import React, { Component } from "react";
import routeData from "./routeData";

class RouteList extends Component {
  renderRoutes = () =>
    routeData.map((route) => (
      <div key={route.timestamp}>
        <h2>Nazwa trasy: {route.routeName}</h2>
        <img alt={route.routeName} src={route.photo} />
        <p>Miasto: {route.city}</p>
        <p>Dystans: {route.distance} km</p>
        <p>Poziom trudności: {route.level}</p>
        <p>Czas trwania: {route.time} min</p>
        <p>Opis trasy: {route.description}</p>
        <br />
        <br />
      </div>
    ));

  render() {
    return <div>{this.renderRoutes()}</div>;
  }
}

export default RouteList;
