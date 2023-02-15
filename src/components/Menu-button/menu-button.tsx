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
        {location.pathname !== "/details" ? (
          <li aria-label="Option1" key={options[0].label}>
            <Link to={options[0].path}>Button1</Link>
          </li>
        ) : (
          <li aria-label="Option2" key={options[1].label}>
            <Link to={options[1].path}>Button</Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
