import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const SearchSlider = () => {
  return (
    <div>
      <Slider.Range defaultValue={[10, 15]} min={0} max={25} step={0.1} />
    </div>
  );
};

export default SearchSlider;
