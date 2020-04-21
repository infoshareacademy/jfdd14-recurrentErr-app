import React, { useContext } from "react";
import { Button, Grid, Icon } from "semantic-ui-react";
import { LoginContext } from "../../context/LoginContext";

function SingleCard(props) {
  const contextLogin = useContext(LoginContext);
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
            {props.item.city} || Dystans: {props.item.distance} km || Czas
            trwania: {props.item.time} min
          </p>
          <p className="card_text">Stopień trudności: {props.item.level}</p>
          <Grid>
            {contextLogin.isLoggedIn ? (
              <Grid.Column width={8}>
                {props.favPlaces.includes(props.item.key) ? (
                  <Button
                    icon
                    labelPosition="left"
                    fluid
                    id={props.item.key}
                    onClick={props.onDelFavBtnClick}
                    color="brown"
                  >
                    <Icon name="heart" />
                    Usuń
                  </Button>
                ) : (
                  <Button
                    icon
                    labelPosition="left"
                    fluid
                    id={props.item.key}
                    onClick={props.onFavBtnClick}
                    color="black"
                  >
                    <Icon name="heart outline" />
                    Dodaj
                  </Button>
                )}
              </Grid.Column>
            ) : null}
            <Grid.Column width={8}>
              <Button
                icon
                labelPosition="left"
                fluid
                name={props.buttonName}
                onClick={props.showModal}
              >
                <Icon name="info circle" />
                Info
              </Button>
            </Grid.Column>
          </Grid>
        </div>
      </div>
    </li>
  );
}
export default SingleCard;
