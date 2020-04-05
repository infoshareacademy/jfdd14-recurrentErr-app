import React from "react";

function SingleCard(props) {
  return (
    <li className="cards_item" key={props.name}>
      <div className="card">
        <div className="card_image">
          <img
            className="searchImg resposive"
            src={props.photoBig}
            alt=""
          ></img>
        </div>
        <div className="card_content">
          <p className="card_title">"{props.name}"</p>
          <p className="card_text">
            {props.city} || dystans: {props.distance}km
          </p>
          <p className="card_text">Stopień trudności: {props.level}</p>
          <button className="btn card_btn">Dowiedz się więcej...</button>
        </div>
      </div>
    </li>
  );
}

export default SingleCard;
