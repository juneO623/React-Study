import React, { useState, useRef } from "react";

const InputSample = () => {
  //   const [text, setText] = useState();

  //   const onChange = (e) => {
  //     console.log(e.target.value);
  //     setText(e.target.value);
  //   };

  //   const onReset = () => {
  //     setText("");
  //   };

  const [inputs, setInputs] = useState({
    name: "",
    nickname: "",
  });

  const nameInput = useRef();

  const { name, nickname } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });

    console.log(e.target.name);
    console.log(e.target.value);
  };

  const onReset = () => {
    setInputs({
      name: "",
      nickname: "",
    });
    console.log(nameInput);
    nameInput.current.focus();
  };

  return (
    <>
      {/* <input onChange={onChange} value={text} />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {text}
      </div> */}
      <input
        name="name"
        placeholder="이름"
        onChange={onChange}
        value={name}
        ref={nameInput}
      />
      <input
        name="nickname"
        placeholder="닉네임"
        onChange={onChange}
        value={nickname}
      />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: {name}</b> ({nickname})
      </div>
    </>
  );
};

export default InputSample;
