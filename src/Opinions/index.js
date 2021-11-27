import fakeUser from './fake-user.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCoffee, faStar, faStarChecked} from '@fortawesome/free-solid-svg-icons'
import "./style.scss";
// import "./style.css";

const Opinions = () => {
    return(
        <div className="Opinions">
            <h3 className="Opinions_Title">opiniones</h3>
            <p className="Opinions_Quote">
            Lorem ipsum dolor sit amet consectetur adipiscing elit eget litora vehicula sociosqu, praesent in magnis eu pharetra mauris congue varius consequat nulla, arcu neque porttitor inceptos faucibus mollis pellentesque nec per interdum. 
            </p>
            <div className="Opinions_User">
                <img src={fakeUser}  alt="User profile picture" />
                <h4 className="Opinions_User-Name">
                    Camilú Arancibia
                </h4>
                <div className="Rated">
                    <FontAwesomeIcon icon={faStar} className="Checked" /> 
                    <FontAwesomeIcon icon={faStar} className="Checked" />
                    <FontAwesomeIcon icon={faStar} className="Checked" />
                    <FontAwesomeIcon icon={faStar} className="Checked" />
                    <FontAwesomeIcon icon={faStar} />

                </div>
                
            </div>
        </div>
    )
}
export { Opinions };