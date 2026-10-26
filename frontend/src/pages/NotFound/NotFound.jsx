import './NotFound.scss';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Button from '../../components/Button/Button';

const NotFound = () => {
  return (
    <>
      <Header />
      <main className="central-column main not-found">
        <div className="not-found__content">
          <p className="not-found__code">404</p>
          <h2 className="not-found__title">Página no encontrada</h2>
          <p className="not-found__text">
            Lo sentimos, la página que estás buscando no existe o ha sido
            movida.
          </p>
          <Button
            to="/"
            variant="button--primary"
            className="not-found__button"
          >
            &larr; Volver al inicio
          </Button>
        </div>

        <div className="not-found__help">
          <h3 className="not-found__help-title">¿Necesitas ayuda? </h3>
          <p className="not-found__help-text">
            Puedes volver al inicio o ponerte en contacto conmigo.
          </p>
          <Link to="/contact" className="not-found__link">
            Ir a contacto &rsaquo;{' '}
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default NotFound;
