import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import "../Detail.scss";
import axios from "axios";
import Info from "../Inventory";

import { CSSTransition } from "react-transition-group";

import { Nav } from "react-bootstrap";
import { connect } from "react-redux";

const Box = styled.div`
  padding: 20px;
`;

const Title = styled.h4`
  font-size: 25px;
  color: ${(props) => props.색};
`;

const Detail = (props) => {
  // const Timer = setTimeout(() => {
  //   setAlert(false);
  // }, 2000);

  // useEffect(async () => {
  //   await Timer();
  //   return () => {clearTimeout(Timer)};
  // }, []);
  const { id } = useParams();
  console.log(props.shoes[parseInt(id)]);
  const [inventory, setInventory] = useState(props.inventory[parseInt(id)]);
  const [alert, setAlert] = useState(true);
  const [inputData, setInputData] = useState("");
  const [tabUi, setTabUi] = useState(0);
  const [switchButton, setSwitchButton] = useState(false);

  const history = useHistory();

  const correctId = props.shoes.find((shoes) => {
    return shoes.id === parseInt(id);
  });
  console.log(correctId);

  useEffect(() => {
    const Timer = setTimeout(() => {
      axios.get();

      setAlert(false);
    }, 2000);
    console.log("안녕");
    return () => {
      clearTimeout(Timer);
    };
  }, []);
  console.log(props.state);

  useEffect(() => {
    var arr = localStorage.getItem("watched");
    if (arr == null) {
      arr = [];
      console.log(arr);
    } else {
      console.log(arr);
      arr = JSON.parse(arr);
      console.log(arr);
    }

    arr.push(parseInt(id));
    console.log(arr);
    arr = new Set(arr);
    console.log(arr);
    arr = [...arr];
    console.log(arr);

    localStorage.setItem("watched", JSON.stringify(arr));
  }, []);

  // []가 비어있으면 처음에만 한 번 실행, [alert]면 alert가 변경될 때마다 실행
  // useEffect를 여러개 사용하고 싶다면 여러번 적으면 적은 순서대로 실행됨

  return (
    <div className="container">
      <Box>
        <Title 색={"blue"}>상세페이지</Title>
        <Title className="red">Detail</Title>
      </Box>
      {inputData}
      <input
        onChange={(event) => {
          setInputData(event.target.value);
        }}
      />
      {alert && (
        <div className="my-alert2">
          <p>재고가 얼마 남지 않았습니다</p>
        </div>
      )}
      {/* {alert === true ? (
        <div className="my-alert2">
          <p>재고가 얼마 남지 않았습니다</p>
        </div>
      ) : null} */}
      <div className="row">
        <div className="col-md-6">
          <img
            src={`https://codingapple1.github.io/shop/shoes${
              parseInt(id) + 1
            }.jpg`}
            alt={`shoes${parseInt(id) + 1}`}
            width="100%"
          />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{correctId.title}</h4>
          <p>{correctId.content}</p>
          <p>{correctId.price}</p>

          <Info inventory={inventory}></Info>

          <button
            className="btn btn-danger"
            onClick={() => {
              setInventory((prev) => prev - 1);
              props.dispatch({
                type: "항목추가",
                payload: {
                  id: correctId.id,
                  name: correctId.title,
                  quan: 1,
                },
              });
              history.push("/cart");
            }}
          >
            주문하기
          </button>
          <button
            className="btn btn-danger"
            onClick={() => {
              history.goBack();
              // 뒤로가기
              //   history.push("/");
            }}
          >
            뒤로가기
          </button>
        </div>
      </div>
      <Nav className="mt-5" variant="tabs" defaultActiveKey="link-0">
        <Nav.Item>
          <Nav.Link
            eventKey="link-0"
            onClick={() => {
              setSwitchButton(false);
              setTabUi(0);
            }}
          >
            상품설명
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link-1"
            onClick={() => {
              setSwitchButton(false);
              setTabUi(1);
            }}
          >
            배송정보
          </Nav.Link>
        </Nav.Item>
      </Nav>
      {/* in에 들어가는 값은 애니메이션을 켜는 스위치 */}
      <CSSTransition in={switchButton} classNames="wow" timeout={500}>
        <TabContent tabUi={tabUi} setSwitchButton={setSwitchButton} />
      </CSSTransition>
    </div>
  );
};

const TabContent = (props) => {
  useEffect(() => {
    props.setSwitchButton(true);
  });

  if (props.tabUi === 0) {
    return <div>0번째 내용입니다</div>;
  } else if (props.tabUi === 1) {
    return <div>1번째 내용입니다</div>;
  } else if (props.tabUi === 2) {
    return <div>2번째 내용입니다</div>;
  }
};

function state를props화(state) {
  console.log(state);
  return { state: state.reducer, alertCondition: state.reducer2 };
}

export default connect(state를props화)(Detail);

// export default Detail;
