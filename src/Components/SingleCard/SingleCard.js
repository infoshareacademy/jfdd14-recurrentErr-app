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
        </div>
      </div>
    </li>
  );
}
export default SingleCard;
