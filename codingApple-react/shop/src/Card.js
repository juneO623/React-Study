const Card = (props) => {
  return (
    <div className="col-md-4">
      <img
        className="shoes_image"
        src={`https://codingapple1.github.io/shop/shoes${props.index + 1}.jpg`}
        alt="shoes1"
      />
      <h4>{props.shoes.title}</h4>
      <p>
        {props.shoes.content} & {props.shoes.price}
      </p>
    </div>
  );
};

export default Card;
