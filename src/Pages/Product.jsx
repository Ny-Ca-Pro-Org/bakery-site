import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router";
import BreadCrums from "../Components/BreadCrums/BreadCrums";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import DetailsPage from "../Components/DetailsPage/DetailsPage";
import RelatedProduct from "../Components/RelatedProduct/RelatedProduct";
const Product = () => {
  const {all_product} = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));
  return (
    <div>
      <BreadCrums product={product} />
      <ProductDisplay product={product} />
    </div>
  );
};

export default Product;
