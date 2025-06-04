import style from "./Footer.module.css";
import footerLogo from "../../assets/logo-big.png";
import instagram from "../../assets/instagram_icon.png";
import pintrest from "../../assets/pinterest_icon.png";
import whatsapp from "../../assets/whatsapp_icon.png";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.miniContainer}>
        <div className={style.footerLogo}>
          <Link to="/">
            <img src={footerLogo} alt="logo" />
          </Link>
          <p>NyCa Bakery</p>
        </div>
        <ul className={style.footerLinks}>
          <a href="#">Shop</a>
          <a href="#">Location</a>
          <a href="/about">About</a>
          <a href="#">Contact</a>
        </ul>
        <div className={style.footerIcons}>
          <div className={style.footerIconscontainer}>
            <a href="#">
              <img src={instagram} alt="logo" />
              <span>instagram</span>
            </a>
          </div>
          <div className={style.footerIconscontainer}>
            <a href="#">
              <img src={pintrest} alt="logo" />
              <span>pinterest</span>
            </a>
          </div>
          <div className={style.footerIconscontainer}>
            <a href="#">
              <img src={whatsapp} alt="logo" />
              <span>whatsapp</span>
            </a>
          </div>
        </div>
      </div>
      <div className={style.copyright}>
        <hr />
        <p>All rights reserve &copy; 2025@copyright.onion</p>
      </div>
    </div>
  );
};

export default Footer;
