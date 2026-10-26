import './Legal.scss';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import LegalPageHeader from '../../components/LegalPageHeader/LegalPageHeader';
import LegalPageFooter from '../../components/LegalPageFooter/LegalPageFooter';

const Privacy = () => {
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
          title="Política de Privacidad"
          subtitle="Tu privacidad es importante para TaskApp."
          date="20 de julio de 2026"
        />

        <p className="legal__intro">
          <span className="legal__text-accent">
            Tu privacidad es importante.
          </span>
          En TaskApp nos tomamos muy en serio la privacidad de tus datos. Solo
          recopilamos la información necesaria para que puedas utilizar la
          aplicación de forma segura. Nunca vendemos tus datos ni los utilizamos
          con fines publicitarios. Esta política explica qué información
          recopilamos, cómo la utilizamos y cuáles son tus derechos como usuaria
          o usuario.
        </p>

        <section className="legal__section">
          <h2 className="legal__title">
            {' '}
            <span className="legal__section-number">1.</span> Responsable del
            tratamiento
          </h2>

          <p className="legal__text">
            La responsable del tratamiento de los datos personales recogidos a
            través de TaskApp es:
          </p>

          <ul className="legal__list">
            <li className="legal__item">
              <strong>Responsable:</strong> Cristina Porteiro Cagiao
            </li>
            <li className="legal__item">
              <strong>País:</strong> España
            </li>
            <li className="legal__item">
              <strong>Correo electrónico:</strong> contactcodeprojects@gmail.com
            </li>
          </ul>

          <p className="legal__text">
            El tratamiento de los datos se realiza de conformidad con el
            Reglamento General de Protección de Datos (RGPD) y la normativa
            española aplicable.
          </p>
        </section>

        <section className="legal__section">
          <h2 className="legal__title">
            <span className="legal__section-number">2.</span> Información que
            recopilamos
          </h2>

          <p className="legal__text">
            TaskApp puede almacenar la siguiente información:
          </p>

          <ul className="legal__list">
            <li className="legal__item">Nombre de usuario.</li>
            <li className="legal__item">Dirección de correo electrónico.</li>
            <li className="legal__item">Contraseña cifrada.</li>
            <li className="legal__item">Tareas creadas por cada usuario.</li>
            <li className="legal__item">
              Preferencias básicas de la aplicación.
            </li>
          </ul>

          <p className="legal__text">
            No recopilamos datos sensibles ni información innecesaria.
          </p>
        </section>

        <section className="legal__section">
          <h2 className="legal__title">
            <span className="legal__section-number">3.</span> Finalidad del
            tratamiento
          </h2>

          <p className="legal__text">
            Los datos se utilizan exclusivamente para:
          </p>

          <ul className="legal__list">
            <li className="legal__item">
              Crear y gestionar la cuenta de usuario.
            </li>
            <li className="legal__item">
              Permitir un acceso seguro a la aplicación.
            </li>
            <li className="legal__item">Guardar y sincronizar las tareas.</li>
            <li className="legal__item">
              Mejorar el funcionamiento de TaskApp.
            </li>
          </ul>

          <p className="legal__text">
            TaskApp no utiliza tus datos con fines publicitarios.
          </p>
        </section>

        <section className="legal__section">
          <h2 className="legal__title">
            <span className="legal__section-number">4.</span> Seguridad
          </h2>

          <p className="legal__text">
            Aplicamos medidas razonables para proteger la información
            almacenada.
          </p>

          <ul className="legal__list">
            <li className="legal__item">
              Contraseñas almacenadas mediante cifrado seguro.
            </li>
            <li className="legal__item">
              Autenticación mediante tokens de acceso.
            </li>
            <li className="legal__item">
              Cada usuario solo puede acceder a sus propios datos.
            </li>
          </ul>

          <p className="legal__text">
            Aunque aplicamos medidas de seguridad, ningún sistema conectado a
            Internet puede garantizar una protección absoluta.
          </p>
        </section>

        <section className="legal__section">
          <h2 className="legal__title">
            <span className="legal__section-number">5.</span> Cesión de datos
          </h2>

          <p className="legal__text">
            TaskApp no vende ni comparte datos personales con terceros, salvo
            cuando exista una obligación legal.
          </p>
        </section>

        <section className="legal__section">
          <h2 className="legal__title">
            <span className="legal__section-number">6.</span> Conservación de
            los datos
          </h2>

          <p className="legal__text">
            Los datos se conservarán mientras la cuenta permanezca activa o
            hasta que la persona usuaria solicite su eliminación.
          </p>
        </section>

        <section className="legal__section">
          <h2 className="legal__title">
            <span className="legal__section-number">7.</span> Derechos de las
            personas usuarias
          </h2>

          <p className="legal__text">Puedes solicitar en cualquier momento:</p>

          <ul className="legal__list">
            <li className="legal__item">Acceder a tus datos personales.</li>
            <li className="legal__item">Rectificar información incorrecta.</li>
            <li className="legal__item">
              Solicitar la eliminación de tu cuenta.
            </li>
            <li className="legal__item">Conocer cómo tratamos tus datos.</li>
          </ul>
        </section>

        <section className="legal__section">
          <h2 className="legal__title">
            <span className="legal__section-number">8.</span> Cookies
          </h2>

          <p className="legal__text">
            Actualmente TaskApp no utiliza cookies con fines publicitarios ni de
            seguimiento.
          </p>

          <p className="legal__text">
            Únicamente pueden emplearse mecanismos técnicos necesarios para
            mantener la sesión iniciada y garantizar el correcto funcionamiento
            de la aplicación.
          </p>
        </section>

        <section className="legal__section">
          <h2 className="legal__title">
            <span className="legal__section-number">9.</span> Cambios en esta
            política
          </h2>

          <p className="legal__text">
            Esta política podrá actualizarse cuando sea necesario para adaptarse
            a mejoras de la aplicación o a cambios en la legislación vigente.
          </p>
        </section>

        <section className="legal__section">
          <h2 className="legal__title">
            <span className="legal__section-number">10.</span> Contacto
          </h2>

          <p className="legal__text">
            Si tienes cualquier duda relacionada con esta Política de
            Privacidad, puedes ponerte en contacto con la responsable mediante
            el correo electrónico indicado anteriormente.
          </p>
        </section>

        <LegalPageFooter />
      </main>

      <Footer />
    </>
  );
};

export default Privacy;
