import React from "react";

import SearchList from "../Components/Search/SearchList";

function Favourites({ places, onFavBtnClick, favPlaces }) {
  return (
    <React.Fragment>
      <SearchList onFavBtnClick={onFavBtnClick} places={places} />
    </React.Fragment>
  );
}

export default Favourites;
