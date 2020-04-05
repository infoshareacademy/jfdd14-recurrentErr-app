import React, { useState } from "react";
import Pagination from "../Pagination/Pagination";
import "../Search/searchList.css";

function SearchList({ places, onFavBtnClick, onDelFavBtnClick, favPlaces }) {
  const [currentPage, setCurrentPage] = useState(1);

  const [cardsPerPage] = useState(6);

  const items = places.map((place) => {
    return (
      <li className="cards_item" key={place.name}>
        <div className="card">
          <div className="card_image">
            <img
              className="searchImg resposive"
              src={place.photoBig}
              alt=""
            ></img>
          </div>
          <div className="card_content">
            <p className="card_title">"{place.name}"</p>
            <p className="card_text">
              {place.city} || dystans: {place.distance}km
            </p>
            <p className="card_text">Stopień trudności: {place.level}</p>
            <button className="btn card_btn">Dowiedz się więcej...</button>
            {favPlaces.includes(place.key) ? (
              <button
                className="btn card_btn"
                id={place.key}
                onClick={onDelFavBtnClick}
              >
                Usuń z ulubionych
              </button>
            ) : (
              <button
                className="btn card_btn"
                id={place.key}
                onClick={onFavBtnClick}
              >
                Dodaj do ulubionych
              </button>
            )}
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
