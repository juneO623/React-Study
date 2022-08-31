import React from "react";

const Hello = ({ name, color, isSpecial }) => {
  return (
    <div style={{ color: color }}>
      {isSpecial && <b>*</b>}
      <b>{isSpecial ? "스페셜함 " : "안스페셜함 "}</b>
      안녕 {name}
    </div>
  );
};

// 기본값
Hello.defaultProps = {
  name: "이름없음",
};

export default Hello;
