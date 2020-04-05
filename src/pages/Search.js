import React, { useReducer, useState, useEffect } from "react";
import SearchForm from "../Components/Search/SearchForm";
import SearchList from "../Components/Search/SearchList";
import mapObjectToArray from "../Components/mapObjectToArray";

const API_URL = "https://isa-crossroads.firebaseio.com/places/.json";

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

function Search() {
  const [state, dispatch] = useReducer(formReducer, INITIAL_STATE);
  const [places, setPlaces] = useState([]);
  const [dropdownValue, setDropdownValue] = useState([]);

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
        places={places
          .filter((e) => textQuery.test(e.name))
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
