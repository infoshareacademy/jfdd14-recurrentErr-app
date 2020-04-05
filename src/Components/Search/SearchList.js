import React, { useState } from "react";
import Pagination from "../Pagination/Pagination";
import SingleCard from "../SingleCard/SingleCard";
import Details from "../Details/Details";
import "../Search/searchList.css";

function SearchList({ places }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(6);
  const [open, setOpen] = useState(false);

  const showModal = () => () => setOpen(true);
  const closeModal = () => setOpen(false);

  const items = places.map((place, index) => {
    return (
      <SingleCard
        key={index}
        item={place}
        open={open}
        showModal={showModal(place)}
      />
    );
  });

  const modal = places
    .map((place, index) => {
      return (
        <Details
          showModal={showModal}
          closeModal={closeModal}
          open={open}
          item={place}
          key={index}
        />
      );
    })
    .find((modal) => modal.index === places.index);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexofFirstCard = indexOfLastCard - cardsPerPage;
  const currentPosts = items.slice(indexofFirstCard, indexOfLastCard);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="searchListContainer">
      {modal}
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
