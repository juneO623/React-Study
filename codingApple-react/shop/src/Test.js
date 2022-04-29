import React, { useEffect, useState } from "react";

const Test = () => {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(20);

  useEffect(() => {
    if (count !== 0 && count < 3) {
      console.log(count);
      setAge(age + 1);
    }
  }, [count]);

  return (
    <div>
      <div>안녕하세요 저는 {age}살 입니다.</div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        누르면 한 살 먹기
      </button>
    </div>
  );
};

export default Test;
