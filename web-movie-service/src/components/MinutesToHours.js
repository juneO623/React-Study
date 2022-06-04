import React from "react";
import { useState } from "react";

const MinutesToHours = () => {
  const [amount, setAmount] = useState(0);
  const [inverted, setInverted] = useState(false);

  const onChange = (event) => {
    // console.log(event.target.value);
    setAmount(event.target.value);
  };
  const reset = () => {
    setAmount(0);
  };
  const onInvert = () => {
    reset();
    setInverted((prev) => !prev);
  };

  return (
    <div>
      <h3>Super Converter</h3>
      <label htmlFor="minutes">Minutes</label>
      <input
        value={inverted ? amount * 60 : amount}
        id="minutes"
        placeholder="Minutes"
        type="number"
        onChange={onChange}
        disabled={inverted}
      />
      <label htmlFor="hours">Hours</label>
      <input
        value={inverted ? amount : Math.round(amount / 60)}
        id="hours"
        type="number"
        placeholder="Hours"
        disabled={!inverted}
        onChange={onChange}
      />

      <button onClick={reset}>Reset</button>
      <button onClick={onInvert}>{inverted ? "Turn back" : "Invert"}</button>
    </div>
  );
};

export default MinutesToHours;
