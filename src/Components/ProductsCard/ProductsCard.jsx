import style from "./ProductsCard.module.css";
// import Cake from "../../assets/another-pastries.webp";
const ProductsCard = (props) => {
  return (
    <div className={style.cardContainer}>
      <div className={style.card}>
        <img src={props.image} alt="cake-image" />
        <div className={style.details}>
          <h3 className={style.title}>{props.title}</h3>
          <p>{props.description} </p>
          <span>Ghc {props.price}</span>
          <button>details</button>
        </div>
      </div>
      
    </div>
  );
};

export default ProductsCard;
