import React from "react";
import "./NewCollections.css";
import new_collections from "../../Assets/new_collections";
import Items from "../Items/Items";

const NewCollections = () => {
  return (
    <div className="new-collections">
      <h1>New Collections</h1>
      <hr />
      <div className="collections">
        {new_collections.map((product, index) => {
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

export default NewCollections;
