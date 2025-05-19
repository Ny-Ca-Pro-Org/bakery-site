import { Link } from "react-router";
import "./Items.css";
const Items = (props) => {
  return (
    <div className="items-container">
      <div className="items">
        <Link to={`/product/${props.id}`}>
          {" "}
          <img src={props.image} onClick={ () => window.scrollTo(0,0) } alt="product image" />{" "}
        </Link>
        <p>{props.name}</p>
        <div className="items-prices">
          <div className="new-price">${props.new_price}</div>
          <div className="old-price">${props.old_price}</div>
        </div>
      </div>
    </div>
  );
};

export default Items;
