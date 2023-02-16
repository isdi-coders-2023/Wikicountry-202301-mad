import "./header.css";

type HeaderProps = { children: JSX.Element };

export function Header({ children }: HeaderProps) {
  const logo = "./images/logo-wikicountry.png";
  return (
    <header className="header">
      <img className="header__image" src={logo} alt="Logo wikicountry" />
      <h1 className="header__title">WikiCountry</h1>
      {children}
    </header>
  );
}
