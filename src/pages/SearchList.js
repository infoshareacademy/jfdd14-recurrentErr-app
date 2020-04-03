import React, { useState, useEffect } from "react";
import Pagination from "../Components/Pagination/Pagination";
import mapObjectToArray from "../Components/mapObjectToArray";
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
      <li class="cards_item">
        <div class="card">
          <div class="card_image">
            <img class="searchImg resposive" src={place.photoBig} alt=""></img>
          </div>
          <div class="card_content">
            <p class="card_title">"{place.name}"</p>
            <p class="card_text">
              {place.city} || dystans: {place.distance}km
            </p>
            <p class="card_text">Stopień trudności: {place.level}</p>
            <button class="btn card_btn">Dowiedz się więcej...</button>
          </div>
        </div>
      </li>
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
      />
    </div>
  );
}

export default SearchList;
