import "./BreadCrums.css";
import breadcrum from "../../Assets/breadcrum_arrow.png";
const BreadCrums = (props) => {
  // let {product} = props;
  return (
    <div className="breadcrums">
      HOME <img src={breadcrum} alt="arrow" /> SHOP
      <img src={breadcrum} alt="arrow" /> {props.category}
      <img src={breadcrum} alt="arrow" /> {props.name}.
    </div>
  );
};

export default BreadCrums;
