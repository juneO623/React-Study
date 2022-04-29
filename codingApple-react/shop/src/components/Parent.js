import React from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";

const Parent = (props) => {
  return (
    <div>
      <Child1 name={props.name}></Child1>
      <Child2 age={props.age}></Child2>
    </div>
  );
};

export default Parent;
