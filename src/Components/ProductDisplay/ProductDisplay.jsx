import "./ProductDisplay.css";
import star_icon from "../../Assets/star_icon.png";
import star_dull_icon from "../../Assets/star_dull_icon.png";
import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
  const product = props;
  const { addToCart } = useContext(ShopContext);
  return (
    <div className="product-display">
      <div className="product-display-left">
        <div className="image-list">
          <img src={product.image} alt="product image" />
          <img src={product.image} alt="product image" />
          <img src={product.image} alt="product image" />
          <img src={product.image} alt="product image" />
        </div>
        <div className="display-image">
          <img className="main-image" src={props.image} alt="product image" />
        </div>
      </div>
      <div className="product-display-right">
        <h1>{props.name}</h1>
        <div className="display-right-star">
          <img src={star_icon} alt="stars" />
          <img src={star_icon} alt="stars" />
          <img src={star_icon} alt="stars" />
          <img src={star_icon} alt="stars" />
          <img src={star_dull_icon} alt="stars" />
        </div>
        <div className="right-prices">
          <div className="new-price">GHC {props.price}</div>
        </div>
        <div className="right-description">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, sint
          iusto atque nulla qui similique, perferendis ad quae quidem eveniet
          error molestiae deserunt impedit. Ullam recusandae eum rerum maxime
          velit in consectetur dolore. Quidem sequi unde atque totam fugit
          rerum.
        </div>

        <button
          onClick={() => {
            addToCart(props.id);
          }}
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default ProductDisplay;
