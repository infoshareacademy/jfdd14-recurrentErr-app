import "rc-slider/assets/index.css";

import React, { useState } from "react";
import Slider from "rc-slider";

const Range = Slider.Range;

const style = {
  marginBottom: "1.5rem",
};

const marks = {
  0: <strong>0</strong>,
  12.5: "12,5",
  25: <strong>25</strong>,
};

const SearchSlider = ({ onChangeSlider }) => {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(25);

  const changeMin = (e) => setMin(+e.target.value || 0);
  const changeMax = (e) => setMax(+e.target.value || 25);

  return (
    <div style={style}>
      <Range
        min={min}
        max={max}
        onMinChange={changeMin}
        onMaxChange={changeMax}
        onChange={onChangeSlider}
        marks={marks}
        defaultValue={[0, 12.5]}
        step={0.1}
      />
    </div>
  );
};

export default SearchSlider;
