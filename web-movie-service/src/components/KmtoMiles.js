import React, { useState } from "react";

const KmToMiles = () => {
  const [distanceAmount, setDistanceAmount] = useState(0);
  const [inverted, setInverted] = useState(false);
  const onChange = (event) => {
    setDistanceAmount(event.target.value);
  };

  const reset = () => {
    setDistanceAmount(0);
  };

  return (
    <div>
      <h3>Km to M</h3>
      <label htmlFor="km">Km</label>
      <input
        id="km"
        placeholder="Km"
        type="number"
        onChange={onChange}
        disabled={inverted}
        value={inverted ? distanceAmount * 1.6 : distanceAmount}
      />
      <label htmlFor="mi">Mile</label>
      <input
        id="mi"
        placeholder="mile"
        type="number"
        onChange={onChange}
        disabled={!inverted}
        value={inverted ? distanceAmount : Math.round(distanceAmount / 1.6)}
      />
      <button onClick={reset}>Reset</button>
      <button onClick={setInverted((inverted) => !inverted)}>
        {inverted ? "Turn back" : "Inverted"}
      </button>
    </div>
  );
};

export default KmToMiles;
