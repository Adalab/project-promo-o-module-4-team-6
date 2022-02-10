import "../styles/layout/Header.scss";
import patataGameLogo from "../images/patataGameLogo.png";

const Header = () => {
  return (
    <header className="header">
      <a
        href="./index.html"
        title="Ir a la página de inicio"
        alt="Ir a la página de inicio"
      >
        <img
          className="header__logo"
          src={patataGameLogo}
          alt="Logo de Awesome Profile Cards"
          title="Logo de Awesome Profile Cards"
        />
      </a>
    </header>
  );
};
export default Header;
