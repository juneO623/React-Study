import React from "react";
import { Table } from "react-bootstrap";
import { connect } from "react-redux";

const Cart = (props) => {
  console.log(props.state);
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
          {props.state.map((product, i) => {
            console.log(props);
            console.log(product);
            return (
              <tr key={i}>
                <th scope="col">{product.id}</th>
                <th scope="col">{product.name}</th>
                <th scope="col">{product.quan}</th>
                <th scope="col">
                  <button
                    onClick={() => {
                      props.dispatch({ type: "increase" });
                    }}
                  >
                    +
                  </button>
                  <button
                    onClick={() => {
                      props.dispatch({ type: "decrease" });
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
    </div>
  );
};

function state를props화(state) {
  return { state: state };
}

export default connect(state를props화)(Cart);
// export default Cart;
