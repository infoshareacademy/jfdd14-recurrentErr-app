import React, { useState } from "react";
import Pagination from "../Pagination/Pagination";
import SingleCard from "../SingleCard/SingleCard";
import Details from "../Details/Details";
import "../Search/searchList.css";

function SearchList({ places, onFavBtnClick, onDelFavBtnClick, favPlaces }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(6);
  const [open, setOpen] = useState(false);
  const [modalObject, setModalObject] = useState({});

  const showModal = (event) => {
    setModalObject(places.find((e) => e.key === event.target.name));
    setOpen(true);
  };
  const closeModal = () => setOpen(false);

  const items = places.map((place, index) => {
    return (
      <SingleCard
        key={index}
        item={place}
        open={open}
        showModal={showModal}
        buttonName={place.key}
        favPlaces={favPlaces}
        onFavBtnClick={onFavBtnClick}
        onDelFavBtnClick={onDelFavBtnClick}
      />
    );
  });

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexofFirstCard = indexOfLastCard - cardsPerPage;
  const currentPosts = items.slice(indexofFirstCard, indexOfLastCard);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="searchListContainer">
      <Details
        showModal={showModal}
        closeModal={closeModal}
        open={open}
        item={modalObject}
        favPlaces={favPlaces}
        onFavBtnClick={onFavBtnClick}
        onDelFavBtnClick={onDelFavBtnClick}
      />
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
