import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
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
    </footer>
  );
};

export default Footer;
