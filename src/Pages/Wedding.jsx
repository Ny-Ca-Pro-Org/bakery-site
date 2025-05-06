import ProductsCard from "../Components/ProductsCard/ProductsCard";
import cake from "../assets/wedding cake.jpg";
import "./CSS/AllCeremonies.css";
const Wedding = () => {
  console.log(cake);
  const productData = [
    {
      image: cake,
      title: "wedding@frosty 1.onion",
      description: "this is a cake that was made by frosty @Ny-Ca-Pro.onion",
      price: 223,
    },
    {
      image: cake,
      title: "wedding@frosty 2.onion",
      description: "this is a cake that was made by frosty @Ny-Ca-Pro.onion",
      price: 666,
    },
    {
      image: cake,
      title: "Title@frosty 3.onion",
      description: "this is a cake that was made by frosty @Ny-Ca-Pro.onion",
      price: 666,
    },
    {
      image: cake,
      title: "wedding@frosty 4.onion",
      description: "this is a cake that was made by frosty @Ny-Ca-Pro.onion",
      price: 666,
    },
    {
      image: cake,
      title: "wedding@frosty 5.onion",
      description: "this is a cake that was made by frosty @Ny-Ca-Pro.onion",
      price: 666,
    },
    {
      image: cake,
      title: "wedding@frosty 6.onion",
      description: "this is a cake that was made by frosty @Ny-Ca-Pro.onion",
      price: 666,
    },
    {
      image: cake,
      title: "wedding@frosty 7.onion",
      description: "this is a cake that was made by frosty @Ny-Ca-Pro.onion",
      price: 666,
    },
    {
      image: cake,
      title: "wedding@frosty 8.onion",
      description: "this is a cake that was made by frosty @Ny-Ca-Pro.onion",
      price: 666,
    },
    {
      image: cake,
      title: "wedding@frosty 9.onion",
      description: "this is a cake that was made by frosty @Ny-Ca-Pro.onion",
      price: 666,
    },
    {
      image: cake,
      title: "wedding@frosty 10.onion",
      description: "this is a cake that was made by frosty @Ny-Ca-Pro.onion",
      price: 555,
    },
    {
      image: cake,
      title: "wedding@frosty 11.onion",
      description: "this is a cake that was made by frosty @Ny-Ca-Pro.onion",
      price: 555,
    },
    {
      image: cake,
      title: "wedding@frosty 12.onion",
      description: "this is a cake that was made by frosty @Ny-Ca-Pro.onion",
      price: 666,
    },
  ];
  return (
    <div className="ceremony">
      <h2>Make your one time Wedding Always memorable</h2>
      <hr />
      <div className="ceremony-container">
        {productData.map((product, index) => {
          return (
            <div key={index}>
              <ProductsCard
                image={product.image}
                title={product.title}
                description={product.description}
                price={product.price}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Wedding;
