import fakeUser from './fake-user.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUserPlus, faStar, faStarChecked} from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import {review} from './Reviews.js';
import "./style.scss";

var count=0;

function star(star){
    var stars = [];
    for(var i=0; i<star; i++){
        stars.push(<FontAwesomeIcon icon={faStar} className="user__data-rated" />);
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
        <div className="opinions">
            <h3 className="opinions__title">OPINIONES</h3>
            <p className="opinions__quote">
            {review[count].description}
            </p>
            <div className="user">
                <img src={fakeUser}  alt="user profile picture" />
                <div className="user__data">
                    <h4 className="user__data-name">
                        {review[count].name}
                    </h4>
                    <div className="user__data-rated">
                        {star(review[count].star)}
                    </div>
                </div>
            </div>
            <div className="opinions__button">
                    <button className='circle-button' onClick={() => setCount(0)}></button>
                    <button className='circle-button' onClick={() => setCount(1)}></button>
                    <button className='circle-button' onClick={() => setCount(2)}></button>
                    <button className='circle-button' onClick={() => setCount(3)}></button>
            </div>
            <div className="create__opinions-button">
                <button 
                    onClick={createOpinion}
                >
                    <FontAwesomeIcon icon={faUserPlus} />
                </button>
            </div>
        </div>
    )
}
export { Opinions };