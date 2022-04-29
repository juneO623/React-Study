import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { inventoryContext } from "../App";

const Card = (props) => {
  const inventory = useContext(inventoryContext);
  const history = useHistory();
  console.log(props);
  return (
    <div
      className="col-md-4"
      onClick={() => {
        history.push(`/detail/${props.index}`);
      }}
    >
      <img
        className="shoes_image"
        src={`https://codingapple1.github.io/shop/shoes${props.index + 1}.jpg`}
        alt={`shoes${props.index + 1}`}
      />
      <h4>{props.shoes.title}</h4>
      <p>
        {props.shoes.content} & {props.shoes.price}
      </p>
      <Test></Test>
    </div>
  );
};

const Test = () => {
  const inventory = useContext(inventoryContext);
  return <p>{inventory}</p>;
};

export default Card;
