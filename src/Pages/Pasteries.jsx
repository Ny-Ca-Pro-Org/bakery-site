import "./CSS/Pasteries.css";
import { useContext } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import dropDown from "../Assets/dropdown_icon.png";
import Items from "../Components/Items/Items";

const Pasteries = () => {
  const { allProduct } = useContext(ShopContext);
  return (
    <div className="pasteries">
      <h2>Cakes Available In Different Flavours And Categories</h2>
      <div className="pasteries-container">
        {allProduct.map((product, index) => {
          return (
            <Items
              key={index}
              image={product.image}
              name={product.name}
              price={product.price}
              id={product.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Pasteries;
