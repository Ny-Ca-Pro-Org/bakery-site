import { Link } from "react-router";
import "./Items.css";
const Items = (props) => {
  return (
    <div className="items-container">
      <div className="items">
        <Link to={`/product/${props.id}`}>
          {" "}
          <img
            src={props.image}
            onClick={() => window.scrollTo(0, 0)}
            alt={props.name}
          />{" "}
        </Link>
        <p>{props.name}</p>
        <div className="items-prices">
          <div className="new-price">Ghc{props.price}</div>
        </div>
      </div>
    </div>
  );
};

export default Items;
