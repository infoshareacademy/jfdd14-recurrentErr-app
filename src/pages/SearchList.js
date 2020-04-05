import React, { useState, useEffect } from "react";
import Pagination from "../Components/Pagination/Pagination";
import mapObjectToArray from "../Components/mapObjectToArray";
import Details from "./Details";
import "./searchList.css";

const API_URL = "https://isa-crossroads.firebaseio.com/places/.json";

function SearchList() {
  const [places, setPlaces] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(6);

  const getPlaces = () => {
    return fetch(API_URL)
      .then((response) => response.json())
      .then((placesObject) => {
        const placesArray = mapObjectToArray(placesObject);

        setPlaces(placesArray);
      });
  };

  useEffect(() => {
    getPlaces();
  }, []);

  const items = places.map((place) => {
    return (
      <Details
        key={place.name}
        photoBig={place.photoBig}
        averageSpeed={place.averageSpeed}
        city={place.city}
        distance={place.distance}
        level={place.level}
        name={place.name}
        time={place.time}
      />
    );
  });

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexofFirstCard = indexOfLastCard - cardsPerPage;
  const currentPosts = items.slice(indexofFirstCard, indexOfLastCard);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="searchListContainer">
      <h1 className="searchH1">Lista wyników wyszukiwania:</h1>
      <ul className="cards">{currentPosts}</ul>
      <Pagination
        cardsPerPage={cardsPerPage}
        totalCards={items.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
}

export default SearchList;
