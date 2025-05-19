import "./Collections.css";
import all_product from "../../Assets/all_product";
import heroImage from "../../Assets/women-3.jpg";
import Items from "../Items/Items";
const Collections = () => {
  return (
    <div className="all-collections">
      <section className="hero-section">
        <div className="hero-image">
          <img
            src={heroImage} // Replace with your own image if needed
            alt="Model"
          />
        </div>
        <div className="hero-text">
          <h3>
            <span></span> OUR BESTSELLERS
          </h3>
          <h1>Latest Arrivals</h1>
          <a href="#">
            SHOP NOW <span></span>
          </a>
        </div>
      </section>
      <div className="collections-items">
        {all_product.map((product, index) => {
          return (
            <Items
              key={index}
              image={product.image}
              name={product.name}
              new_price={product.new_price}
              old_price={product.old_price}
              id={product.id}
              caterogy={product.caterogy}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Collections;
