import style from "./Hero.module.css";
const Hero = () => {
  return (
    <div className={style.hero}>
      <div className={style.card}>
        <h1>
          order for your <br /> next event
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam saepe
          dolorem repellendus et quis ea amet aspernatur esse? Nulla ducimus
          molestias modi vel fugiat perferendis fugit in saepe, sunt dolore.
        </p>
        <button>Learn More</button>
        <div className={style.swipperBox}>
          <button className="rightArrow">&lt;</button>
          <div>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <button>&gt;</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
