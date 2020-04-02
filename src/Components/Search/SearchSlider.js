import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const SearchSlider = (props) => {
  const style = {
    marginBottom: "1.5rem",
  };

  const marks = {
    0: <strong>0</strong>,
    12.5: "12,5",
    25: <strong>25</strong>,
  };

  return (
    <div style={style}>
      {props.children}
      <Slider.Range
        style={{ border: "blue" }}
        marks={marks}
        defaultValue={[0, 12.5]}
        min={0}
        max={25}
        step={0.1}
      />
    </div>
  );
};

export default SearchSlider;
