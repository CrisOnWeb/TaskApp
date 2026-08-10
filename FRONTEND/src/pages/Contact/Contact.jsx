import './Contact.scss';
import { useState, useEffect, useRef } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import LegalPageHeader from '../../components/LegalPageHeader/LegalPageHeader';
import Button from '../../components/Button/Button';
import githubIcon from '../../assets/vsg/GitHub_Invertocat_Black.svg';
import linkedinIcon from '../../assets/img/inBug-Black.png';

const Contact = () => {
  const [copied, setCopied] = useState(false);

  // Guarda identificador del temporizador
  const timeoutRef = useRef(null);

  // Cancelamos el temporizador si el componente se desmonta
  useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('contacto@taskapp.dev');

      // Cancelamos temporizador anterior
      clearTimeout(timeoutRef.current);

      setCopied(true);

      // Creamos temporizador y guardamos identificador en la variable
      timeoutRef.current = setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('No se pudo copiar el correo', error);
    }
  };
  return (
    <>
      <Header />
      <main className="central-column main contact">
        <LegalPageHeader
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
              />
            </svg>
          }
          title="Contacto"
          subtitle="¿Has encontrado un error, tienes una sugerencia o simplemente quieres saludar? Estaré encantada de leerte."
        />

        <ul className="contact__list">
          <li className="contact__item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="contact__icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
            <div className="contact__info">
              <h3 className="contact__title">Email</h3>
              <p className="contact__text">
                La forma más rápida de contactar conmigo.
              </p>
              <a className="contact__link" href="mailto:contacto@taskapp.dev">
                contacto@taskapp.dev
              </a>
            </div>
            <p aria-live="polite" className="visually-hidden">
              {copied && 'Correo electrónico copiado al portapapeles.'}
            </p>
            <Button
              className="contact__button"
              onClick={handleCopyEmail}
              variant="button--secondary"
              aria-label="Copiar dirección de correo"
            >
              {copied ? '¡Copiado!' : 'Copiar'}
            </Button>
          </li>

          <li className="contact__item">
            <img
              className="contact__icon"
              src={linkedinIcon}
              alt=""
              aria-hidden="true"
            />
            <div className="contact__info">
              <h3 className="contact__title">LinkedIn</h3>
              <p className="contact__text">
                Conecta conmigo y conoce mi trayectoria profesional.
              </p>
              <a
                className="contact__link"
                href="https://linkedin.com/in/cristinaporteiro"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/cristinaporteiro
              </a>
            </div>
            <Button
              className="contact__button"
              href="https://linkedin.com/in/cristinaporteiro"
              variant="button--secondary"
              target="_blank"
              rel="noreferrer noopener"
            >
              Ver perfil
            </Button>
          </li>

          <li className="contact__item">
            <img
              className="contact__icon"
              src={githubIcon}
              alt=""
              aria-hidden="true"
            />
            <div className="contact__info">
              <h3 className="contact__title">GitHub</h3>
              <p className="contact__text">
                Consulta el código fuente de TaskApp o descubre otros proyectos.
              </p>
              <a
                className="contact__link"
                href="https://github.com/CrisOnWeb"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/CrisOnWeb
              </a>
            </div>
            <Button
              className="contact__button"
              href="https://github.com/CrisOnWeb/TaskApp"
              variant="button--secondary"
              target="_blank"
              rel="noreferrer noopener"
            >
              Ver repositorio
            </Button>
          </li>
        </ul>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
