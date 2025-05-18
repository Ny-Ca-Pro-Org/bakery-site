import { useContext } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import dropDown from "../Assets/dropdown_icon.png";
import Items from "../Components/Items/Items";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className="category">
      <img src={props.banner} alt="banner" className="shop-banner" />
      <div className="shopCategory-indexSort">
        <p>
          <span>Showing 1 - 12 </span> out of 36
        </p>
        <div className="shopCategory-sort">
          Sort by <img src={dropDown} alt="icon" />
        </div>
      </div>
      <div className="shopcategory-product">
        {all_product.map((product, index) => {
          if (props.category === product.category) {
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
          } else {
            return null;
          }
        })}
      </div>
      <div className="load-more-btn">view more</div>
    </div>
  );
};

export default ShopCategory;
