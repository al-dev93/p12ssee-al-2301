import "./Layout.css";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo/logo.svg";
import relaxationIcon from "../../assets/icons/relaxation-icon.svg";
import swimmingIcon from "../../assets/icons/swimming-icon.svg";
import cyclingIcon from "../../assets/icons/cycling-icon.svg";
import weightIcon from "../../assets/icons/weight-icon.svg";

const Layout = () => (
  <div className="layoutWrapper">
    <header>
      <img src={logo} alt="logo" />
      <nav className="headerNav">
        <ul>
          <li>
            <NavLink>Accueil</NavLink>
          </li>
          <li>
            <NavLink>Profil</NavLink>
          </li>
          <li>
            <NavLink>Réglage</NavLink>
          </li>
          <li>
            <NavLink>Communauté</NavLink>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <nav className="mainNav">
        <div className="pictoButtonsWrapper">
          <div className="pictoButton">
            <img src={relaxationIcon} alt="" />
          </div>
          <div className="pictoButton">
            <img src={swimmingIcon} alt="" />
          </div>
          <div className="pictoButton">
            <img src={cyclingIcon} alt="" />
          </div>
          <div className="pictoButton">
            <img src={weightIcon} alt="" />
          </div>
        </div>
        <p className="copyright">Copiryght, SportSee 2020</p>
      </nav>
      <section>content</section>
    </main>
  </div>
);

export default Layout;
