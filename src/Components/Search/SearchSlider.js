import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const SearchSlider = () => {
  const style = {
    display: "flex",
    minWidth: 250,
    maxWidth: 600,
  };

  return (
    <div>
      <Slider.Range
        style={style}
        defaultValue={[0, 10]}
        min={0}
        max={25}
        step={0.1}
      />
    </div>
  );
};

export default SearchSlider;
