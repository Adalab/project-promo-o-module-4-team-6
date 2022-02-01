import '../styles/layout/Footer.scss';
import adalabLogo from '../images/logo-adalab.png'; 

const Footer = () => {
  return (
    <footer className="footer ">
      <p className="footer__text">Awesome profile-cards @2022</p>
      <a className="footer__link" title="logo de adalab" target="_blank">
        <img
          className="footer__link-image"
          src={adalabLogo}
          alt="logo adalab"
        />
      </a>
    </footer>
  );
};
export default Footer;