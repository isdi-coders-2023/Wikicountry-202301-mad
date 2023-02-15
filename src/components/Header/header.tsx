import "./header.css";

export function Header() {
  const logo = "./images/logo-wikicountry.png";
  return (
    <header className="header">
      <img className="header__image" src={logo} alt="Logo wikicountry" />
      <h1 className="header__title">WikiCountry</h1>
    </header>
  );
}
