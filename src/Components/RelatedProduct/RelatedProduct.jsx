import "./RelatedProduct.css";
import data_product from "../../Assets/data";
import Items from "../Items/Items";

const RelatedProduct = () => {
  return (
    <div className="related">
      <h1>Related Products</h1>
      <hr />
      <div className="related-item">
        {data_product.map((product, index) => {
          return (
            <Items
              key={index}
              image={product.image}
              name={product.name}
              new_price={product.new_price}
              old_price={product.old_price}
              id={product.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RelatedProduct;
