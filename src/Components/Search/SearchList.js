import React, { useState } from "react";
import Pagination from "../Pagination/Pagination";
import "../Search/searchList.css";

function SearchList({ places }) {
  const [currentPage, setCurrentPage] = useState(1);

  const [cardsPerPage] = useState(6);

  const items = places.map((place) => {
    return (
      <SingleCard
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
