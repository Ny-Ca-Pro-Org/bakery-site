import "./ItemsCard.css";
import pastries from "../../assets/another-pastries.webp";
import wedding from "../../assets/wedding cake.jpg";
import birthday from "../../assets/birthday-cake.jpg";
import { Link } from "react-router";
const ItemsCard = () => {
  return (
    <div className="container">
      <div className="items-header">
        <h2>pastries for you favorite occasions</h2>
        <p>
          we have you covered with pastries for your birthdays, wedding holidays
          and more
        </p>
        <button>Read more</button>
      </div>
      <div className="items-container">
        <div className="items">
          <Link to="/wedding">
            <img src={wedding} alt="product image" />
          </Link>
          <h3>Wedding</h3>
        </div>
        <div className="items">
          <Link to="/birthday">
            <img src={birthday} alt="product image" />
          </Link>
          <h3>Birthday</h3>
        </div>
        <div className="items">
          <Link to={"/ceremony"}>
            <img src={pastries} alt="product image" />
          </Link>
          <h3>all pastries</h3>
        </div>
      </div>
    </div>
  );
};

export default ItemsCard;
