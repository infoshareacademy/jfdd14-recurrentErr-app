import React, { useReducer, useState } from "react";
import SearchForm from "../Components/Search/SearchForm";
import SearchList from "../Components/Search/SearchList";

const INITIAL_STATE = {
  textValue: "",
  sliderValue: 0,
};

function formReducer(state, { field, value }) {
  return {
    ...state,
    [field]: value,
  };
}

function Search({ places, onFavBtnClick, onDelFavBtnClick, favPlaces }) {
  const [state, dispatch] = useReducer(formReducer, INITIAL_STATE);
  const [dropdownValue, setDropdownValue] = useState([]);

  const onChange = (e) => {
    dispatch({ field: e.target.name, value: e.target.value });
  };

  const onChangeDropdown = (event, data) => {
    setDropdownValue(data.value);
  };

  const { textValue, sliderValue } = state;

  const textQuery = new RegExp(textValue, "i");

  return (
    <React.Fragment>
      <SearchForm
        textValue={textValue}
        dropdownValue={dropdownValue}
        sliderValue={sliderValue}
        onChangeText={onChange}
        onChangeDropdown={onChangeDropdown}
        onChangeSlider={onChange}
      />
      <SearchList
        favPlaces={favPlaces}
        onFavBtnClick={onFavBtnClick}
        onDelFavBtnClick={onDelFavBtnClick}
        places={places
          .filter((e) => textQuery.test(e.name) || textQuery.test(e.city))
          .filter((e) =>
            dropdownValue.length === 0
              ? true
              : dropdownValue.find((level) => level === e.level)
          )
          .filter((e) => (sliderValue === 0 ? true : e.time < sliderValue))}
      />
    </React.Fragment>
  );
}

export default Search;
