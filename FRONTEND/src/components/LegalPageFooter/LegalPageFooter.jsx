import './LegalPageFooter.scss';
import Button from '../../components/Button/Button';

const LegalPageFooter = () => {
  return (
    <>
      <div className="legal-footer__card">
        <section className="legal-footer__section">
          <h2 className="legal-footer__title">Responsable de la aplicación</h2>

          <address>
            <strong>Cristina Porteiro Cagiao</strong>
            <br />
            España
            <br />
            <a
              className="legal-footer__link"
              href="mailto:contacto@taskapp.dev"
            >
              contacto@taskapp.dev
            </a>
          </address>
        </section>

        <section className="legal-footer__section">
          <h2 className="legal-footer__title">¿Tienes alguna duda?</h2>

          <p className="legal-footer__text">
            Si tienes alguna duda, has detectado algún problema o tienes una
            idea para mejorar la aplicación, puedes ponerte en contacto conmigo.
            Estaré encantada de recibir tus comentarios.
          </p>

          <Button
            href="mailto:contacto@taskapp.dev"
            variant="button--primary"
            className="legal-footer__button"
          >
            Contactar
          </Button>
        </section>
      </div>
    </>
  );
};

export default LegalPageFooter;
