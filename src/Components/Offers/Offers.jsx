import "./Offers.css";
import exclusiveImage from "../../Assets/exclusive_image.png";
const Offers = () => {
  return (
    <div className="offer">
      <div className="offer-left">
        <h1>Exclusite</h1>
        <h1>Offers For You</h1>
        <p>ONLY BEST SELLERS PRODUCTS</p>
        <button>check now</button>
      </div>
      <div className="offer-right">
        <img src={exclusiveImage} alt="exlcusive image" />
      </div>
    </div>
  );
};

export default Offers;
