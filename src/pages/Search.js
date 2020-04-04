import React, { useReducer } from "react";
import SearchForm from "../Components/Search/SearchForm";
import SearchList from "../pages/SearchList";

const INITIAL_STATE = {
  textValue: "",
  sliderValue: 0,
  selectValue: "0",
};

function formReducer(state, { field, value }) {
  return {
    ...state,
    [field]: value,
  };
}

function Search(props) {
  const [state, dispatch] = useReducer(formReducer, INITIAL_STATE);

  const onChange = (e) => {
    dispatch({ field: e.target.name, value: e.target.value });
  };

  const searchRoute = () => {
    console.log(textValue, sliderValue, selectValue);
  };

  const { textValue, sliderValue, selectValue } = state;

  return (
    <React.Fragment>
      <SearchForm
        textValue={textValue}
        selectValue={selectValue}
        sliderValue={sliderValue}
        onChangeText={onChange}
        onChangeSelect={onChange}
        onChangeSlider={onChange}
        onSearchSubmit={searchRoute}
      />
      <SearchList />
    </React.Fragment>
  );
}

export default Search;
