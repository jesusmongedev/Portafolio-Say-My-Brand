import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    // const LOGO = 'https://i.postimg.cc/Rhjc1fmm/Euro-Building.png';
    const LOGO = 'https://i.postimg.cc/rpjWz3Y5/Euro-Building-White.png';
    return (
        <nav className="header">
            <img src={LOGO} className="header__img"/>
            <h1 className="header__title">EUROBUILDING</h1>
            <details className="toggle">
                <summary className="toggle__icon">
                    <span> <FontAwesomeIcon  icon={faBars} /> </span>
                </summary>
                <ul className="toggle__list">
                    <li><a target="_blank" href="https://bio.link/jmongedev">About us</a></li>
                    <li><a href="./Login/login.html">Blog</a></li>
                    <li><a target="_blank" href="https://jmongedev.netlify.app/">Rooms</a></li>
                </ul>
            </details>
        </nav>
    )
}

export { Header }