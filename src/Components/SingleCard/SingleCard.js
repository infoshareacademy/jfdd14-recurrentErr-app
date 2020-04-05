import React from "react";

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
          <button
            name={props.buttonName}
            className="btn card_btn"
            onClick={props.showModal}
          >
            Dowiedz się więcej...
          </button>
          {props.favPlaces.includes(props.item.key) ? (
            <button
              className="btn card_btn"
              id={props.item.key}
              onClick={props.onDelFavBtnClick}
            >
              Usuń z ulubionych
            </button>
          ) : (
            <button
              className="btn card_btn"
              id={props.item.key}
              onClick={props.onFavBtnClick}
            >
              Dodaj do ulubionych
            </button>
          )}
        </div>
      </div>
    </li>
  );
}
export default SingleCard;
