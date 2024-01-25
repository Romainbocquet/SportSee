import logo from '../assets/image/sportsee-logo.png';
import '../assets/styles/Header.css';

export default function Header() {
  return (
      <div id="navbar">
        <div className="logo">
          <img src={logo} alt="Logo SportSee" />
          <p id='sportsee-name'>SportSee</p>
        </div>
        <nav>
          <a href="#">Accueil</a>
          <a href="#">Profil</a>
          <a href="#">Réglage</a>
          <a href="#">Communauté</a>
        </nav>
      </div>
  )
}