import React, { useState } from "react";
import "./App.css";

function App() {
  let [글제목, 글제목변경] = useState([
    "남자코트 추천",
    "강남 우동맛집",
    "파이썬독학",
  ]);
  let [좋아요, 좋아요변경] = useState(0);
  let [modal, modal변경] = useState(false);
  let [titleNum, titleNumChange] = useState(0);

  let [입력값, 입력값변경] = useState("");

  // let posts = "강남 고기 맛집";

  // function 반복된UI() {
  //   var array = [];
  //   for (var i = 0; i < 3; i++) {
  //     array.push(<div>안녕</div>);
  //   }

  //   return array;
  // }

  // var arr = [2, 3, 4];
  // var newArr = arr.map(function (a) {
  //   return a * 2;
  // });

  // function 제목정렬() {
  //   var titleArr = [...글제목];
  //   titleArr.sort();
  //   글제목변경(titleArr);
  // }

  // function 제목바꾸기() {
  //   var newArray = [...글제목];
  //   newArray[0] = "여자코트 추천";
  //   글제목변경(newArray);
  // }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      {/* <button
        onClick={() => {
          // 제목정렬();
        }}
        style={{ width: "100px", height: "20px", marginTop: "30px" }}
      ></button> */}
      {/* <button
        onClick={() => {
          // 제목바꾸기();
        }}
        style={{
          width: "100px",
          height: "20px",
          textAlign: "center",
          paddingBottom: "20px",
        }}
      >
        제목변경
      </button> */}
      {/* <div className="list">
        <h3>
          {글제목[0]}
          <span
            onClick={() => {
              좋아요변경(좋아요 + 1);
            }}
          >
            👍
          </span>
          {좋아요}
        </h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3>{글제목[1]}</h3>
        <p>6월 23일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3>{글제목[2]}</h3>
        <p>3월 21일 발행</p>
        <hr />
      </div> */}
      {/* {반복된UI()} */}

      {글제목.map(function (글, index) {
        return (
          <div className="list" key={index}>
            <h3
              onClick={() => {
                titleNumChange(index);
              }}
            >
              {글}
              <span
                onClick={() => {
                  좋아요변경(좋아요 + 1);
                }}
              >
                👍
              </span>
              {좋아요}
            </h3>

            <p>6월 23일 발행</p>
            <hr />
          </div>
        );
      })}
      {/* <button
        onClick={() => {
          titleNumChange(0);
        }}
      >
        버튼1
      </button>
      <button
        onClick={() => {
          titleNumChange(1);
        }}
      >
        버튼2
      </button>
      <button
        onClick={() => {
          titleNumChange(2);
        }}
      >
        버튼3
      </button> */}
      {/* {입력값}
      <input
        onChange={(e) => {
          입력값변경(e.target.value);
          console.log(입력값);
        }}
      /> */}
      <div className="publish">
        <input
          onChange={(e) => {
            입력값변경(e.target.value);
          }}
        />
        <button
          onClick={() => {
            var 제목후보 = [...글제목];
            제목후보.unshift(입력값);
            글제목변경(제목후보);
          }}
        >
          저장
        </button>
      </div>

      <Profile />

      <button
        onClick={() => {
          modal변경(!modal);
        }}
      >
        모달 on/off
      </button>

      {modal ? <Modal 글제목={글제목} titleNum={titleNum}></Modal> : null}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h2>제목 {props.글제목[props.titleNum]}</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;

// 옛날 리액트 문법
class Profile extends React.Component {
  constructor() {
    // constructor = class의 변수 / 초기값 저장할 때 씁니다
    super();
    this.state = { name: "kim", age: 30 };
  }

  changeName() {
    this.setState({ name: "park" });
  }

  render() {
    return (
      <div>
        <h3>프로필입니다</h3>
        <p>저는 {this.state.name}</p>
        <button onClick={this.changeName.bind(this)}>버튼</button>
      </div>
    );
  }
}
