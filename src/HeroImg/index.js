import "./HeroImg.scss";

const HeroImg = () => {
  return (
    <figure className="heroimg">
      <img
        className="heroimg__picture"
        src="https://i.postimg.cc/Gt4CBcgg/nad-hemnani-LTwm-Gm1-WXa-M-unsplash.jpg"
        alt="Hotel IMG"
      />
      <figcaption className="heroimg__description">
        Aquí deben ir imagenes llamativas del Hotel
      </figcaption>
    </figure>
  );
};

export { HeroImg };
