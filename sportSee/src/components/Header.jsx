import logo from '../assets/image/sportsee-logo.png';
import '../assets/styles/Header.css';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
      <div id="navbar">
        <div className="logo">
          <img src={logo} alt="Logo SportSee" />
          <p id='sportsee-name'>SportSee</p>
        </div>
        <nav>
          <a href="#">Accueil</a>
          <NavLink to="/user/18">
            <a href="#">Profil</a>
          </NavLink>
          <a href="#">Réglage</a>
          <a href="#">Communauté</a>
        </nav>
      </div>
  )
}