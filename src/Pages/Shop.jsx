import React from "react";
import Hero from "../Components/Hero/Hero";
import ItemsCard from "../Components/ItemsCard/ItemsCard";
import Orders from "../Components/Orders/Orders";
import AboutChef from "../Components/AboutChef/AboutChef";

const Shop = () => {
  return (
    <div>
      <Hero />
      <ItemsCard />
      <Orders />
      <AboutChef />
    </div>
  );
};

export default Shop;
