import "./Popular.css";
import data_product from "../../Assets/data";
import Items from "../Items/Items";
const Popular = () => {
  return (
    <div className="popular">
      <h1>POPULAR IN SHOP</h1>
      <hr />
      <div className="popular-items">
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

export default Popular;
