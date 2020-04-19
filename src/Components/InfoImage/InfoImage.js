import React, { useState, useEffect } from "react";
import infoImage from "./infoImage.svg";
import infoImage_mobile from "./infoImage_mobile.svg";
import "./InfoImage.css";

function InfoImage() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const imageUrl = windowWidth >= 599 ? infoImage : infoImage_mobile;

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <img className="info__image" src={imageUrl} alt="peopleOnCrossroads" />
  );
}

export default InfoImage;
