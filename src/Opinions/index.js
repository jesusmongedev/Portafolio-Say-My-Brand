import fakeUser from './fake-user.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUserPlus, faStar, faStarChecked} from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import {review} from './Reviews.js';
import "./style.scss";
// import "./style.css";


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


const Opinions = (props) => {
    const [count, setCount] = useState(0);

    const createOpinion = () => {
      props.setOpenOpinions(prevState => !prevState);
    }

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
                    <button onClick={() => setCount(3)}></button>
            </div>
            <button 
            className="Opinions_Button--create"
            onClick={createOpinion}
            >
                <FontAwesomeIcon icon={faUserPlus} />
            </button>
        </div>
    )
}
export { Opinions };