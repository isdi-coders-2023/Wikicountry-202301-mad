import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { MenuOption } from "../App/App";

type MenuProps = {
  options: MenuOption[];
};
export function MenuButton({ options }: MenuProps) {
  const location = useLocation();

  return (
    <nav>
      <ul>
        {location.pathname === ("/main" || "/") ? (
          <li aria-label="Option1" key={options[1].label}>
            <Link to={options[1].path}>Ir a fav</Link>
          </li>
        ) : (
          <li aria-label="Option2" key={options[0].label}>
            <Link to={options[0].path}>Ir a home</Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
