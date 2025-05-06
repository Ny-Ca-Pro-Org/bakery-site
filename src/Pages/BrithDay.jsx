import ProductsCard from "../Components/ProductsCard/ProductsCard";
import birthdaycake from "../assets/birthday-cake.jpg";
import "./CSS/BirthDay.css";
const BirthDay = () => {
  const productData = [
    {
      image: birthdaycake,
      title: "Title@frosty 1.onion",
      description: "this is a cake that was made by frosty @Ny-Ca-Pro.onion",
      price: 223,
    },
    {
      image: birthdaycake,
      title: "Title@frosty 2.onion",
      description: "this is a cake that was made by frosty @Ny-Ca-Pro.onion",
      price: 555,
    },
    {
      image: birthdaycake,
      title: "Title@frosty 3.onion",
      description: "this is a cake that was made by frosty @Ny-Ca-Pro.onion",
      price: 555,
    },
    {
      image: birthdaycake,
      title: "Title@frosty 4.onion",
      description: "this is a cake that was made by frosty @Ny-Ca-Pro.onion",
      price: 555,
    },
    {
      image: birthdaycake,
      title: "Title@frosty 5.onion",
      description: "this is a cake that was made by frosty @Ny-Ca-Pro.onion",
      price: 555,
    },
    {
      image: birthdaycake,
      title: "Title@frosty 6.onion",
      description: "this is a cake that was made by frosty @Ny-Ca-Pro.onion",
      price: 555,
    },
    {
      image: birthdaycake,
      title: "Title@frosty 7.onion",
      description: "this is a cake that was made by frosty @Ny-Ca-Pro.onion",
      price: 555,
    },
    {
      image: birthdaycake,
      title: "Title@frosty 8.onion",
      description: "this is a cake that was made by frosty @Ny-Ca-Pro.onion",
      price: 555,
    },
    {
      image: birthdaycake,
      title: "Title@frosty 9.onion",
      description: "this is a cake that was made by frosty @Ny-Ca-Pro.onion",
      price: 555,
    },
    {
      image: birthdaycake,
      title: "Title@frosty 10.onion",
      description: "this is a cake that was made by frosty @Ny-Ca-Pro.onion",
      price: 555,
    },
    {
      image: birthdaycake,
      title: "Title@frosty 11.onion",
      description: "this is a cake that was made by frosty @Ny-Ca-Pro.onion",
      price: 555,
    },
    {
      image: birthdaycake,
      title: "Title@frosty 12.onion",
      description: "this is a cake that was made by frosty @Ny-Ca-Pro.onion",
      price: 555,
    },
  ];
  return (
    <div className="ceremony">
      <h2>Make Your Birthdays Memorable With Our Special Cakes</h2>
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

export default BirthDay;
