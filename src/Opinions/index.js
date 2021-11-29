import fakeUser from './fake-user.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCoffee, faStar, faStarChecked} from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react';
import "./style.scss";
// import "./style.css";

const review = [
    {
      name: "Camila Arancibia",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit eget litora vehicula sociosqu, praesent in magnis eu pharetra mauris congue varius consequat nulla, arcu neque porttitor inceptos faucibus mollis pellentesque nec per interdum.",
      image: "https://i.imgur.com/uz4qrhX.png?1",
      star: 3,
    },
    {
        name: "Antonio Silva",
        description:
          "Lorem ipsum dolor sit amet consectetur adipiscing elit eget litora vehicula sociosqu, praesent in magnis eu pharetra mauris congue varius consequat nulla, arcu neque porttitor inceptos faucibus mollis pellentesque nec per interdum.",
        image: "https://i.imgur.com/uz4qrhX.png?1",
        star: 4,
      },
    {
      name: "Jesús Monge",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit eget litora vehicula sociosqu, praesent in magnis eu pharetra mauris congue varius consequat nulla, arcu neque porttitor inceptos faucibus mollis pellentesque nec per interdum.",
      image: "https://i.imgur.com/uz4qrhX.png?1",
      star: 5,
    },
  ];

var count=0;

function star(star){
    var stars = [];
    for(var i=0; i<star; i++){
        stars.push(<FontAwesomeIcon icon={faStar} className="Checked" />);
    }
    if (star<5){
        for(var i=0; i<5-star; i++){
            stars.push(<FontAwesomeIcon icon = {faStar} />);
        }
    }
    return stars;
}
const Opinions = () => {
    const [count, setCount] = useState(0);
    return(
        <div className="Opinions">
            <h3 className="Opinions_Title">opiniones</h3>
            <p className="Opinions_Quote">
            {review[count].description}
            </p>
            <div className="Opinions_User">
                <img src={fakeUser}  alt="User profile picture" />
                <h4 className="Opinions_User-Name">
                    {review[count].name}
                </h4>
                <div className="Rated">
                    {star(review[count].star)}
                </div>
            </div>
            <div className="Opinions__button">
                    <button onClick={() => setCount(0)}></button>
                    <button onClick={() => setCount(1)}></button>
                    <button onClick={() => setCount(2)}></button>
                </div>
        </div>
    )
}
export { Opinions };