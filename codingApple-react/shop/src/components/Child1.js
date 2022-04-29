import React, { useEffect } from "react";
import { memo } from "react";

const Child1 = memo(() => {
  useEffect(() => {
    console.log("랜더링됨1");
  });
  return <div>1111</div>;
});

export default Child1;
