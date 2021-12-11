import React from 'react'
import {SliderData} from './SliderData';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronRight, faChevronLeft} from '@fortawesome/free-solid-svg-icons'
import './style.scss';

const ImageSlider = () => {
    // Estado para Renderizar la imagen a la actual (current)
    const [current, setCurrent] = React.useState(0);
    // Longitud del Array SliderData para hacer la lógica de nuestro Slider
    const length = SliderData.length; // 5 Imagenes (items) en mi Array SliderData

    // Funciones Onclick Siguiente Imagen
    const nextSlide = () => {
        /* Mientra mi valor de current no sea igual a la longitud del Array - 1 (Index de la ultima imagen=4) => current + 1 cuando se cumpla la condición => current = 0 */
        // length - 1 => Porque mi Array tiene 5 elementos pero sus indices empiezan en 0,1,2,3,4 
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    // Funciones Onclick Anterior Imagen
    const prevSlide = () => {
        /* Si mi valor de current = 0 entonces renderizar la imagen con el indice 4 y luego se ira restando de 1 en 1, hasta que vuelva a ser 0 y el current sea 4 de nuevo */
        setCurrent(current === 0 ? length - 1 : current - 1);
    };
    // Aquí se puede ver en consola los index al presionar los botones
    console.log(current);    

    return (
        <section className="slider">
            <FontAwesomeIcon icon={faChevronLeft} className="slider__left-arrow" onClick={prevSlide}/>
            <FontAwesomeIcon icon={faChevronRight} className="slider__right-arrow" onClick={nextSlide}/>
            {SliderData.map((slide, index) => {
                return (
                    <div 
                        className={index === current ? 'slide active' : 'slide'}
                        key={index}
                    >
                        {index === current && (<img src={slide.image} alt={slide.alt} className="slide__image"/>)}

                    </div>
                )
                
            })}
        </section>
    );
};

export {ImageSlider};
