import "./style.css";
import React, { useState } from 'react';

const items = [
    {
      name: "Deluxe",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit eget litora vehicula sociosqu, praesent in magnis eu pharetra mauris congue varius consequat nulla, arcu neque porttitor inceptos faucibus mollis pellentesque nec per interdum.",
      image: "https://i.imgur.com/uz4qrhX.png?1",
    },
    {
      name: "Standard",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit eget litora vehicula sociosqu, praesent in magnis eu pharetra mauris congue varius consequat nulla, arcu neque porttitor inceptos faucibus mollis pellentesque nec per interdum.",
      image: "https://i.imgur.com/uz4qrhX.png?1",
    },
    {
      name: "First Class",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit eget litora vehicula sociosqu, praesent in magnis eu pharetra mauris congue varius consequat nulla, arcu neque porttitor inceptos faucibus mollis pellentesque nec per interdum.",
      image: "https://i.imgur.com/uz4qrhX.png?1",
    },
  ];

var count=0;


const Rooms = () => {
    const [count, setCount] = useState(0);
    return(
        <section>
            <h2>Habitaciones</h2>
            <div className="rooms__container">
                <img src={items[count].image} alt={items[count].name} />
                <h3>{items[count].name}</h3>
                <p>{items[count].description}</p>
                <div className="rooms__container__button">
                    <button onClick={() => setCount(0)}></button>
                    <button onClick={() => setCount(1)}></button>
                    <button onClick={() => setCount(2)}></button>
                </div>
                <button className="vermas">Ver más</button>
            </div>
        </section>
    )
}

export { Rooms };