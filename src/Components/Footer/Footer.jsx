import React from "react";
import style from "./Footer.module.css";
import footerLogo from "../../assets/logo_big.png";
import instagram from "../../assets/instagram_icon.png";
import pintrest from "../../assets/pinterest_icon.png";
import whatsapp from "../../assets/whatsapp_icon.png";

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.footerLogo}>
        <img src={footerLogo} alt="logo" />
        <p>commerce@nyCa-Pro.onion</p>
      </div>
      <ul className={style.footerLinks}>
        <li>Shop</li>
        <li>Locations</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className={style.footerIcons}>
        <div className={style.footerIconscontainer}>
          <img src={instagram} alt="logo" />
        </div>
        <div className={style.footerIconscontainer}>
          <img src={pintrest} alt="logo" />
        </div>
        <div className={style.footerIconscontainer}>
          <img src={whatsapp} alt="logo" />
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
