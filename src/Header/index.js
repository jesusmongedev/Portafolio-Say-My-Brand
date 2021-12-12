import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = (props) => {
    const LOGO = 'https://i.postimg.cc/rpjWz3Y5/Euro-Building-White.png';
    return (
        <nav className="header">
            <img src={LOGO} className="header__logo"/>
            <h1 className="header__name">EUROBUILDING</h1>
            <details className="nav">
                <summary className="nav__icon">
                    <span> <FontAwesomeIcon  icon={faBars} /> </span>
                </summary>
                <ul className="nav__links">
                    <li><a 
                            target="_blank"
                            onClick={()=>props.setOpenRegister(prevState => !prevState)}
                        >
                            Registrate
                        </a>
                    </li>
                    <li><a target="_blank" href="#">About us</a></li>
                    <li><a target="_blank" href="#">Blog</a></li>
                    <li><a target="_blank" href="#">Rooms</a></li>
                </ul>
            </details>
        </nav>
    )
}

export { Header }