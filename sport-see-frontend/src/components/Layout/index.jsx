import "./style.css";
import { NavLink, Outlet } from "react-router-dom";
import pictoButtonList from "../../utils/pictoButtonList";
import PictoButton from "../PictoButton";
import logo from "../../assets/logo/logo.svg";

const Layout = () => {
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
          <p className="copyright">Copiryght, SportSee 2020</p>
        </nav>
        <div className="profilPageWrapper">
          <article>
            <Outlet />
          </article>
        </div>
      </main>
    </div>
  );
};

export default Layout;
