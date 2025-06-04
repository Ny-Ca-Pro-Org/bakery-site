import "./ProductDisplay.css";
import star_icon from "../../Assets/star_icon.png";
import star_dull_icon from "../../Assets/star_dull_icon.png";
import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = ({ product }) => {
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
          <img className="main-image" src={product.image} alt="product image" />
        </div>
      </div>
      <div className="product-display-right">
        <h1>{product.name}</h1>
        <div className="display-right-star">
          <img src={star_icon} alt="stars" />
          <img src={star_icon} alt="stars" />
          <img src={star_icon} alt="stars" />
          <img src={star_icon} alt="stars" />
          <img src={star_dull_icon} alt="stars" />
        </div>
        <div className="right-prices">
          <div className="new-price">GHC {product.price}</div>
        </div>
        <div className="right-description">
          <p>{product.description}</p>
        </div>
        <button onClick={() => addToCart(product.id)}>ADD TO CART</button>
      </div>
    </div>
  );
};

export default ProductDisplay;
