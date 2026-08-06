import './Footer.scss';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner central-column">
        <p className="footer__copy">
          &copy;2026 TaskApp &middot; Hecho con 💜 por{' '}
          <a
            className="footer__author"
            href="https://github.com/CrisOnWeb"
            target="_blank"
            rel="noreferrer noopener"
          >
            @CrisOnWeb
          </a>
        </p>
        <nav className="footer__nav">
          <ul className="footer__list">
            <li className="footer__item">
              <NavLink className="footer__link" to="/privacy">
                Privacidad
              </NavLink>
            </li>
            <li className="footer__item">
              <NavLink className="footer__link" to="/terms">
                Términos
              </NavLink>
            </li>
            <li className="footer__item">
              <NavLink className="footer__link" to="/contact">
                Contacto
              </NavLink>
            </li>
            <li className="footer__item">
              <a
                className="footer__link"
                href="https://linkedin.com/in/cristinaporteiro"
                target="_blank"
                rel="noreferrer noopener"
              >
                LinkedIn
              </a>
            </li>
            <li className="footer__item">
              <a
                className="footer__link"
                href="https://github.com/CrisOnWeb/TaskApp"
                target="_blank"
                rel="noreferrer noopener"
              >
                Github
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
