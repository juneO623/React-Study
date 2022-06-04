import "./App.css";
import { useState } from "react";
import MinutesToHours from "./components/MinutesToHours";
import KmToMiles from "./components/KmtoMiles";

const App = () => {
  // const [timeSwitch, settimeSwitch] = useState(true);
  // const [distanceSwitch, setDistanceSwitch] = useState(true);
  const [index, setIndex] = useState(0);

  const onSelect = (event) => {
    setIndex(event.target.value);
  };

  // const onTimeSwitch = () => {
  //   settimeSwitch((timeSwitch) => !timeSwitch);
  // };

  // const onDistanceSWitch = () => {
  //   setDistanceSwitch((distanceSwitch) => !distanceSwitch);
  // };

  return (
    <div className="container">
      {/* <div>
        <button onClick={onTimeSwitch}>Time Converter</button>
        <button onClick={onDistanceSWitch}>Distance Converter</button>
      </div> */}
      <h2>Converter</h2>
      <select value={index} onChange={onSelect}>
        {/* {timeSwitch && <MinutesToHours />}
        {distanceSwitch && <KmToMile />} */}
        <option value="0">Minutes & Hours </option>
        <option value="1">Km & Miles</option>
      </select>
      <hr />
      {index === "0" ? <MinutesToHours /> : null}
      {index === "1" ? <KmToMiles /> : null}
    </div>
  );
};

export default App;
