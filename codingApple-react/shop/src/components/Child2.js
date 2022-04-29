import React, { useEffect } from "react";
import { memo } from "react";

const Child2 = memo(() => {
  useEffect(() => {
    console.log("랜더링됨2");
  });
  return <div>2222</div>;
});

export default Child2;
