import React from "react";
import { Button, Grid } from "semantic-ui-react";

function SingleCard(props) {
  return (
    <li className="cards_item">
      <div className="card">
        <div className="card_image">
          <img
            className="searchImg resposive"
            src={props.item.photoBig}
            alt=""
          ></img>
        </div>
        <div className="card_content">
          <p className="card_title">"{props.item.name}"</p>
          <p className="card_text">
            {props.item.city} || dystans: {props.item.distance}km
          </p>
          <p className="card_text">Stopień trudności: {props.item.level}</p>
          <Grid>
            <Grid.Column width={8}>
              {props.favPlaces.includes(props.item.key) ? (
                <Button
                  fluid
                  id={props.item.key}
                  onClick={props.onDelFavBtnClick}
                  color="violet"
                >
                  {" "}
                  Usuń z ulubionych
                </Button>
              ) : (
                <Button
                  fluid
                  id={props.item.key}
                  onClick={props.onFavBtnClick}
                  color="green"
                >
                  {" "}
                  Dodaj do ulubionych
                </Button>
              )}
            </Grid.Column>
            <Grid.Column width={8}>
              <Button fluid name={props.buttonName} onClick={props.showModal}>
                Więcej informacji
              </Button>
            </Grid.Column>
          </Grid>
        </div>
      </div>
    </li>
  );
}
export default SingleCard;
