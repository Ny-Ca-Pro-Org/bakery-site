import React from "react";
import "./AboutChef.css";
import chef from "../../assets/chef.jpg";

const AboutChef = () => {
  return (
    <div className="chef">
      <div className="left">
        <img src={chef} alt="chef" />
      </div>
      <div className="right">
        <h1>About The Chef</h1>
        <p>
          Meet Amy Elikem Kurd-Marckay, our talented in-house chef at NyCa
          Bakery. With a strong background in Nutrition and Food Science and
          years of experience in quality control and food safety, Amy brings
          precision and creativity to every recipe. She ensures every treat is
          crafted with care, delighting our customers with fresh, wholesome, and
          delicious baked goods
        </p>
        <a
          href="https://www.instagram.com/nyca_bakery?igsh=NzdqdXgzc3gyNGV3"
          target="_blank"
        >
          <button>Learn More About Nelly</button>
        </a>
      </div>
    </div>
  );
};

export default AboutChef;
