import React from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Parent from "./Parent";

const Cart = () => {
  const stateData = useSelector((state) => state);
  console.log(stateData);
  console.log(stateData.reducer);
  console.log(stateData.alertState);
  const dispatch = useDispatch();

  return (
    <div>
      <Table className="table" responsive>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">상품명</th>
            <th scope="col">수량</th>
            <th scope="col">변경</th>
          </tr>
        </thead>
        <tbody>
          {stateData.reducer.map((product, i) => {
            // console.log(product);
            return (
              <tr key={i}>
                <th scope="col">{product.id}</th>
                <th scope="col">{product.name}</th>
                <th scope="col">{product.quan}</th>
                <th scope="col">
                  <button
                    onClick={() => {
                      dispatch({ type: "increase", idx: product.id });
                    }}
                  >
                    +
                  </button>
                  <button
                    onClick={() => {
                      dispatch({ type: "decrease", idx: product.id });
                    }}
                  >
                    -
                  </button>
                </th>
              </tr>
            );
          })}
          {/* <tr>
            <th>1</th>
            <td>{props.상품명}</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colSpan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr> */}
        </tbody>
      </Table>

      {stateData.alertState && (
        <div className="my-alert2">
          <p>지금 구매하시면 신규할인 20%</p>
          <button
            onClick={() => {
              dispatch({ type: "close" });
            }}
          >
            X
          </button>
        </div>
      )}
      {!stateData.alertState && (
        <div className="my-alert2">
          <button
            onClick={() => {
              dispatch({ type: "open" });
            }}
          >
            펼치기
          </button>
        </div>
      )}
      <Parent name="John" age="20"></Parent>
    </div>
  );
};

// function state를props화(state) {
//   console.log(state);
//   return { state: state.reducer, alertCondition: state.reducer2 };
// }

// export default connect(state를props화)(Cart);
export default Cart;
