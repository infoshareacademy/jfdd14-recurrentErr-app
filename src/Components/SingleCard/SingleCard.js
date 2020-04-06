import React from "react";
import { Button, Icon, Grid } from "semantic-ui-react";

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
                  icon
                  id={props.item.key}
                  onClick={props.onDelFavBtnClick}
                  color="violet"
                >
                  <Icon name="heart" />
                </Button>
              ) : (
                <Button
                  fluid
                  icon
                  id={props.item.key}
                  onClick={props.onFavBtnClick}
                  color="green"
                >
                  <Icon name="heart outline" />
                </Button>
              )}
            </Grid.Column>
            <Grid.Column width={8}>
              <Button
                fluid
                icon
                name={props.buttonName}
                onClick={props.showModal}
              >
                <Icon name="info circle" />
              </Button>
            </Grid.Column>
          </Grid>
        </div>
      </div>
    </li>
  );
}
export default SingleCard;
