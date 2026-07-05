import './Landing.scss';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Button from '../../components/Button/Button';
import HeroImg from '../../assets/img/hero-img.png';

const Landing = () => {
  return (
    <>
      <Header />
      <main className="main">
        <section className="hero">
          <div className="hero__inner central-column">
            <div className="hero__content">
              <p className="hero__eyebrow">
                <svg
                  className="hero__eyebrow-icon"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
                  />
                </svg>
                Organiza tu día. Enfócate en lo importante.
              </p>
              <h2 className="hero__title">
                La forma más sencilla de gestionar tus{' '}
                <span className="hero__highlight">tareas</span>
              </h2>
              <p className="hero__text">
                Crea, organiza y completa tus tareas diarias.
              </p>
              <p className="hero__text">
                TaskApp te ayuda a mantener el foco, la productividad y tener
                todo bajo control.
              </p>
              <div className="hero__buttons">
                <Button variant="button--primary" to="/">
                  Sign Up
                </Button>
                <Button variant="button--secondary" to="/">
                  Log In
                </Button>
              </div>
              <div className="hero__badges">
                <article className="hero__badge">
                  <p className="hero__badge-title">Fácil de usar</p>
                  <p className="hero__badge-text">
                    Interfaz intuitiva y sin complicaciones
                  </p>
                </article>
                <article className="hero__badge">
                  <p className="hero__badge-title">Tus datos seguros</p>
                  <p className="hero__badge-text">
                    Privacidad y seguridad garantizadas
                  </p>
                </article>
                <article className="hero__badge">
                  <p className="hero__badge-title">Más productividad</p>
                  <p className="hero__badge-text">
                    Mejores hábitos, mejores resultados
                  </p>
                </article>
              </div>
            </div>
            <div className="hero__image-wrapper">
              <img
                className="hero__image"
                src={HeroImg}
                alt="Captura de la interfaz de TaskApp mostrando una lista de tareas."
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Landing;
