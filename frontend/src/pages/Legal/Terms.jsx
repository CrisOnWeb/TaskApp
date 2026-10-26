import './Legal.scss';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import LegalPageHeader from '../../components/LegalPageHeader/LegalPageHeader';
import LegalPageFooter from '../../components/LegalPageFooter/LegalPageFooter';

const Terms = () => {
  return (
    <>
      <Header />
      <main className="central-column main legal">
        <LegalPageHeader
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.3}
              stroke="currentColor"
              className=""
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
              />
            </svg>
          }
          title="Términos y Condiciones"
          subtitle="Estas condiciones regulan el uso de TaskApp y describen los derechos
            y responsabilidades tanto de las personas usuarias como de la
            responsable de la aplicación."
          date="20 de julio de 2026"
        />

        <p className="legal__intro">
          Al utilizar TaskApp aceptas los presentes Términos y Condiciones. Si
          no estás de acuerdo con alguno de ellos, deberás dejar de utilizar la
          aplicación.
        </p>

        <section className="legal__section">
          <h2 className="legal__title">
            <span className="legal__section-number">1.</span> Uso de la
            aplicación
          </h2>

          <p className="legal__text">
            TaskApp es una aplicación diseñada para ayudarte a organizar y
            gestionar tus tareas de forma sencilla, segura e intuitiva.
          </p>

          <p className="legal__text">
            Al utilizar la aplicación te comprometes a:
          </p>

          <ul className="legal__list">
            <li className="legal__item">
              Utilizar TaskApp de forma responsable y conforme a la legislación
              vigente.
            </li>
            <li className="legal__item">
              Mantener la confidencialidad de tus credenciales de acceso.
            </li>
            <li>
              No intentar acceder a cuentas o información de otras personas
              usuarias.
            </li>
            <li className="legal__item">
              No utilizar la aplicación para actividades ilícitas, fraudulentas
              o que puedan perjudicar su funcionamiento.
            </li>
          </ul>
        </section>

        <section className="legal__section">
          <h2 className="legal__title">
            <span className="legal__section-number">2.</span> Cuenta de usuario
          </h2>

          <p className="legal__text">
            Cada persona usuaria es responsable de la actividad realizada desde
            su cuenta y de mantener la confidencialidad de sus credenciales de
            acceso.
          </p>

          <p className="legal__text">
            Si sospechas que alguien ha accedido a tu cuenta sin autorización,
            puedes ponerte en contacto con la responsable de la aplicación.
          </p>
        </section>

        <section className="legal__section">
          <h2 className="legal__title">
            <span className="legal__section-number">3.</span> Propiedad
            intelectual
          </h2>

          <p className="legal__text">
            El nombre TaskApp, su diseño, la interfaz de usuario, el código
            fuente, los elementos gráficos y el resto del contenido de la
            aplicación son propiedad de la responsable del proyecto y están
            protegidos por la legislación aplicable en materia de propiedad
            intelectual.
          </p>

          <p className="legal__text">
            No está permitida su reproducción, distribución o modificación sin
            autorización expresa.
          </p>
        </section>

        <section className="legal__section">
          <h2 className="legal__title">
            <span className="legal__section-number">4.</span> Disponibilidad del
            servicio
          </h2>

          <p className="legal__text">
            Se trabaja para mantener TaskApp disponible y funcionando
            correctamente. No obstante, pueden producirse interrupciones
            temporales debido a tareas de mantenimiento, actualizaciones o
            incidencias técnicas.
          </p>
        </section>

        <section className="legal__section">
          <h2 className="legal__title">
            <span className="legal__section-number">5.</span> Funcionamiento del
            servicio
          </h2>

          <p className="legal__text">
            TaskApp se desarrolla con el objetivo de ofrecer una experiencia
            estable, segura y fiable.
          </p>

          <p className="legal__text">
            Aun así, como ocurre con cualquier aplicación, pueden producirse
            errores, incidencias técnicas o interrupciones puntuales del
            servicio.
          </p>

          <p className="legal__text">
            Se realizarán los esfuerzos razonables para resolver cualquier
            incidencia en el menor tiempo posible y seguir mejorando la
            aplicación de forma continua.
          </p>
        </section>

        <section className="legal__section">
          <h2 className="legal__title">
            <span className="legal__section-number">6.</span> Modificaciones
          </h2>

          <p className="legal__text">
            Estos Términos y Condiciones podrán actualizarse cuando sea
            necesario para incorporar nuevas funcionalidades, mejoras del
            servicio o adaptarse a cambios en la legislación aplicable.
          </p>

          <p className="legal__text">
            La fecha de la última actualización aparecerá siempre al inicio de
            este documento.
          </p>
        </section>

        <section className="legal__section">
          <h2 className="legal__title">
            <span className="legal__section-number">7.</span> Legislación
            aplicable
          </h2>

          <p className="legal__text">
            Estos Términos y Condiciones se rigen por la legislación española y
            por la normativa aplicable en materia de servicios digitales,
            protección de datos y propiedad intelectual.
          </p>
        </section>
        <LegalPageFooter />
      </main>
      <Footer />
    </>
  );
};

export default Terms;
