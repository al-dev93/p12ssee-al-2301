import "./Layout.css";
import { NavLink, Outlet } from "react-router-dom";
import logo from "../../assets/logo/logo.svg";
import pictoButtonList from "../../utils/pictoButtonList";
import PictoButton from "../PictoButton/PictoButton";

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
          {pictoButtonList.map((picto) => (
            <PictoButton key={picto.name} picto={picto.icon} />
          ))}
        </div>
        <p className="copyright">Copiryght, SportSee 2020</p>
      </nav>
      <section>
        <Outlet />
      </section>
    </main>
  </div>
);

export default Layout;
