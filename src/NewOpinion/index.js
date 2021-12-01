import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {FaStar} from "react-icons/fa";
import {review} from '../Opinions/Reviews.js';
import "./style.scss";

const colors = {
    yellow: "#FFBF00",
    grey: "#A9A9A9"
}

function NewOpinion(props,{children}){
    
    const stars = Array(5).fill(0);
    const [currentValue, setCurrentValue] = React.useState(0);
    const [hoverValue, setHoverValue] = React.useState(undefined);

    const handleClick = value => {
        setCurrentValue(value);
    }

    const handleMouseOver = value => {
        setHoverValue(value);
    }

    const handleMouseLeave = () => {
        setHoverValue(undefined);
    }

    const [newOpinionValue, setNewOpinionValue] = React.useState('');
    const [newNameValue, setNewNameValue] = React.useState('');
    
    const onChangeOpinion = (event) => {
        setNewOpinionValue(event.target.value);
    }

    const onChangeName = (event) => {
        setNewNameValue(event.target.value);
    }

    const onCancel = () => {
        props.setOpenOpinions(false);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        review.push({
            name: newNameValue,
            description: newOpinionValue,
            image: "https://i.imgur.com/uz4qrhX.png?1",
            star: currentValue,
            }
        )
        props.setOpenOpinions(false);
    }

    return(ReactDOM.createPortal(
        <form onSubmit={onSubmit} className="new-opinion">
        <h2>Escriba su opinión</h2>
            <input
                placeholder="Escribe tu nombre"
                value={newNameValue}
                onChange={onChangeName}
            />
            <div className="new-opinion__stars">
                {stars.map((_, index) => {
                    return(
                        <FaStar
                            key={index}
                            size={24}
                            style={
                                {
                                    marginRight: 10,
                                    cursor: "pointer"
                                }
                            }
                            color={(hoverValue || currentValue) > index ? colors.yellow : colors.grey}
                            onClick={() => handleClick(index + 1)}
                            onMouseOver={() => handleMouseOver(index + 1)}
                            onMouseLeave={handleMouseLeave}
                        />
                    )
                })}
            </div>
            <textarea 
                className="text" 
                placeholder="Escribe tu opinión"
                value={newOpinionValue}
                onChange={onChangeOpinion}
            />
            <button 
                type="button" 
                className="button"
                onClick={onCancel}
            >
                Cancelar
            </button>
            <button 
                type="submit" 
                className="button"
                onClick={onSubmit}
            >
                Enviar
            </button>
        </form>,
        document.getElementById('new-opinion'),
    ));
}
export {NewOpinion};