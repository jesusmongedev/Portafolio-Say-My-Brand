import "./style.scss";
import React, { useState } from 'react';

const items = [
    {
      name: "Deluxe",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit eget litora vehicula sociosqu, praesent in magnis eu pharetra mauris congue varius consequat nulla, arcu neque porttitor inceptos faucibus mollis pellentesque nec per interdum.",
      image: "https://i.postimg.cc/Gt4CBcgg/nad-hemnani-LTwm-Gm1-WXa-M-unsplash.jpg",
    },
    {
      name: "Standard",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit eget litora vehicula sociosqu, praesent in magnis eu pharetra mauris congue varius consequat nulla, arcu neque porttitor inceptos faucibus mollis pellentesque nec per interdum.",
      image: "https://i.postimg.cc/7YT4wZ2f/sara-dubler-Koei-7y-Yt-Io-unsplash.jpg",
    },
    {
      name: "First Class",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit eget litora vehicula sociosqu, praesent in magnis eu pharetra mauris congue varius consequat nulla, arcu neque porttitor inceptos faucibus mollis pellentesque nec per interdum.",
      image: "https://i.postimg.cc/2SRD6NQT/patrick-robert-doyle-AH8z-KXq-FITA-unsplash.jpg",
    },
  ];

var count=0;


const Rooms = () => {
    const [count, setCount] = useState(0);
    return(
        <section className="rooms">
            <h2 className="rooms__title">Habitaciones</h2>
            <div className="rooms__container">
                <img src={items[count].image} alt={items[count].name} />
                <div className="rooms__container-button">
                    <button className="circle-button" onClick={() => setCount(0)}></button>
                    <button className="circle-button" onClick={() => setCount(1)}></button>
                    <button className="circle-button" onClick={() => setCount(2)}></button>
                </div>
                <h3>{items[count].name}</h3>
                <p>{items[count].description}</p>
                <button className="button button--active"> <a>Ver más</a> </button>
            </div>
        </section>
    )
}

export { Rooms };