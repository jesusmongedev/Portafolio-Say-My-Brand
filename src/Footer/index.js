import './style.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMobileAlt} from '@fortawesome/free-solid-svg-icons'
import {faWhatsapp, faInstagram, faFacebook, faTwitter} from '@fortawesome/free-brands-svg-icons'


const Footer = () => {
    return (
        <footer>
            <div className="footer__contact">
                <h3 className="footer__contact-title" >Contactos</h3>
                <a href="#" target="_blank">
                    <FontAwesomeIcon icon={faWhatsapp} className="footer__contact-icon" />  
                    <span>+58-412-902.22.22</span>
                </a>
                <a href="#" target="_blank">
                    <FontAwesomeIcon icon={faMobileAlt} className="footer__contact-icon" /> 
                    <span>0800-EBHOTEL (3246835)</span>
                </a>
            </div>
            <div className="footer__social">
                <h3 className="footer__social-title" >Redes Sociales</h3>
                <div className="footer__social-icon-container">
                    <a href="#" target="_blank">
                        <FontAwesomeIcon icon={faInstagram} className="footer__social-icon" /> 
                    </a>
                    <a href="#" target="_blank">
                        <FontAwesomeIcon icon={faFacebook} className="footer__social-icon" /> 
                    </a>
                    <a href="#" target="_blank">
                        <FontAwesomeIcon icon={faTwitter} className="footer__social-icon" /> 
                    </a>
                </div>
            </div>
        </footer>
    )
}

export { Footer };

