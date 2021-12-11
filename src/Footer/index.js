import './style.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMobileAlt} from '@fortawesome/free-solid-svg-icons'
import {faWhatsapp, faInstagram, faFacebook, faTwitter} from '@fortawesome/free-brands-svg-icons'


const Footer = () => {
    return (
        <footer>
            <div className="contact">
                <h3 className="contact__title" >Contactos</h3>
                <a href="#" target="_blank">
                    <FontAwesomeIcon icon={faWhatsapp} className="contact-icon" />  
                    <span>+58-412-902.22.22</span>
                </a>
                <a href="#" target="_blank">
                    <FontAwesomeIcon icon={faMobileAlt} className="contact-icon" /> 
                    <span>0800-EBHOTEL (3246835)</span>
                </a>
            </div>
            <div className="social">
                <h3 className="social__title" >Redes Sociales</h3>
                <div className="social__icon-container">
                    <a href="#" target="_blank">
                        <FontAwesomeIcon icon={faInstagram} className="social-icon" /> 
                    </a>
                    <a href="#" target="_blank">
                        <FontAwesomeIcon icon={faFacebook} className="social-icon" /> 
                    </a>
                    <a href="#" target="_blank">
                        <FontAwesomeIcon icon={faTwitter} className="social-icon" /> 
                    </a>
                </div>
            </div>
        </footer>
    )
}

export { Footer };

