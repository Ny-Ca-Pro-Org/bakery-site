import "./CSS/Product.css";
import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router";
import BreadCrums from "../Components/BreadCrums/BreadCrums";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
const Product = () => {
  const { allProduct } = useContext(ShopContext);
  const { productId } = useParams();
  const product = allProduct.find((e) => e.id === productId);

  // Wait until product is found
  if (!product) {
    return <div>Loading product...</div>;
  }

  return (
    <div className="product">
      <BreadCrums product={product} />
      <ProductDisplay product={product} />
    </div>
  );
};

export default Product;
