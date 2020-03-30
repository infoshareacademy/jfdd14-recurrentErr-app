import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const marks = {
  0: <strong>0 km</strong>,
  5: "5 km",
  10: "10 km",
  15: "15 km",
  20: "20 km",
  25: <strong>25 km</strong>,
};

const SearchSlider = () => {
  return (
    <div>
      <Slider.Range
        defaultValue={[10, 15]}
        marks={marks}
        min={0}
        max={25}
        step={0.1}
      />
    </div>
  );
};

export default SearchSlider;
