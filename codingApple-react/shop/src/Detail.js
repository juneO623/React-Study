import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Detail = (props) => {
  const history = useHistory();
  const { id } = useParams();
  const correctId = props.shoes.find((shoes) => {
    return shoes.id == parseInt(id);
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img
            src={`https://codingapple1.github.io/shop/shoes${
              parseInt(id) + 1
            }.jpg`}
            width="100%"
          />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{correctId.title}</h4>
          <p>{correctId.content}</p>
          <p>{correctId.price}</p>
          <button className="btn btn-danger">주문하기</button>
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
    </div>
  );
};

export default Detail;
