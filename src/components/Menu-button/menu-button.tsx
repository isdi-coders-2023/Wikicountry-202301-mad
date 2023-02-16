import "./menu-button.css";
import { Link, useLocation } from "react-router-dom";
import { MenuOption } from "../App/App";

type MenuProps = {
  options: MenuOption[];
};
export function MenuButton({ options }: MenuProps) {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <nav className="nav-menu">
      <ul className="nav-list">
        <li className="nav-list__home" key={options[0].label}>
          <Link to={options[0].path}>Ir a home</Link>
        </li>

        <li className="nav-list__fav" key={options[1].label}>
          <Link to={options[1].path}>Ir a fav</Link>
        </li>
      </ul>
    </nav>
  );
}
