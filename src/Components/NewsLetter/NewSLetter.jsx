import React from "react";
import style from "./NewsLetter.module.css";

const NewSLetter = () => {
  return (
    <div className={style.newsLetter}>
      <h1>Get Exclussive Updates Via Email</h1>
      <p>subscribe to our newsletter and stay updated</p>
      <div>
        <input type="email" placeholder="enter your email" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default NewSLetter;
