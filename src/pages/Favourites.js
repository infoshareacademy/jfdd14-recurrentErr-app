import React from "react";
import { Header, Grid } from "semantic-ui-react";
import SearchList from "../Components/Search/SearchList";

function Favourites({ places, onFavBtnClick, onDelFavBtnClick, favPlaces }) {
  return (
    <React.Fragment>
      <Grid centered padded>
        <Grid.Column width={16} verticalAlign="middle">
          <Header as="h2">Ulubione trasy przechadzek</Header>
        </Grid.Column>
        <Grid.Column width={16} verticalAlign="middle">
          <SearchList
            favPlaces={favPlaces}
            onFavBtnClick={onFavBtnClick}
            onDelFavBtnClick={onDelFavBtnClick}
            places={places.filter((e) =>
              favPlaces.find((key) => key === e.key)
            )}
          />
        </Grid.Column>
      </Grid>
    </React.Fragment>
  );
}

export default Favourites;
