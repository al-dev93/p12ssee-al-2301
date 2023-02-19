import "./style.css";
import { NavLink, Outlet } from "react-router-dom";
import pictoButtonList from "../../utils/pictoButtonList";
import PictoButton from "../PictoButton";
import logo from "../../assets/logo/logo.svg";

/**
 * @description layout component
 * @returns render layout for home and profil pages
 */
const Layout = () => {
  // list of buttons in left nav bar
  const { navButton } = pictoButtonList;
  return (
    <div className="layoutWrapper">
      <header>
        <img src={logo} alt="logo" />
        <nav className="headerNav">
          <ul>
            <li>
              <NavLink to="/">Accueil</NavLink>
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
            {navButton.map((picto) => (
              <PictoButton key={picto.name} picto={picto} />
            ))}
          </div>
          <span className="copyright">Copiryght, SportSee 2020</span>
        </nav>
        {/* container where page content is rendered */}
        <div className="pageWrapper">
          {/* element in wich the page is rendered */}
          <article>
            <Outlet />
          </article>
        </div>
      </main>
    </div>
  );
};

export default Layout;
