import "./menu-button.css";
import { Link, useLocation } from "react-router-dom";
import { MenuOption } from "../App/App";

type MenuProps = {
  options: MenuOption[];
};
export function MenuButton({ options }: MenuProps) {
  const location = useLocation();
  console.log(location.pathname);
  const home = "./images/img-home.png";
  const fav = "./images/img-fav.png";

  return (
    <nav className="nav-menu">
      <ul className="nav-list">
        <li className="nav-list__home" key={options[0].label}>
          <Link to={options[0].path}>
            <img className="home__image" src={home} alt="Casa home" />
          </Link>
        </li>

        <li className="nav-list__fav" key={options[1].label}>
          <Link to={options[1].path}>
            <img className="fav__image" src={fav} alt="Estrella favoritos" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
