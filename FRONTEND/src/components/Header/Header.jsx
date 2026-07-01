import './Header.scss';
import logo from '../../assets/img/logo.png';

const Header = ({ search, setSearch }) => {
  const handleSearchInput = (ev) => {
    setSearch(ev.target.value);
  };

  return (
    <header className="header">
      <div className="header__inner central-column">
        <div className="header__logoAndName">
          <img
            className="header__logo"
            src={logo}
            alt="Logo de la APP que muestra un dibujo de una tarea"
          />
          <h1 className="header__name">TaskApp</h1>
        </div>
        <form className="header__form">
          <label className="visually-hidden" htmlFor="search">
            Buscador de tareas
          </label>
          <input
            className="header__input"
            type="search"
            name="search"
            id="search"
            placeholder="Buscar tareas..."
            value={search}
            onChange={handleSearchInput}
          />
        </form>
        <button className="header__hamb" aria-label="Menú">
          <svg
            aria-hidden="true"
            className="hamb-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="512"
            height="512"
            viewBox="0 0 1024 1024"
          >
            <path d="M27 193.6c-8.2-8.2-12.2-18.6-12.2-31.2s4-23 12.2-31.2S45.6 119 58.2 119h912.4c12.6 0 23 4 31.2 12.2s12.2 18.6 12.2 31.2s-4 23-12.2 31.2s-18.6 12.2-31.2 12.2H58.2c-12.6 0-23-4-31.2-12.2zm974.8 285.2c8.2 8.2 12.2 18.6 12.2 31.2s-4 23-12.2 31.2s-18.6 12.2-31.2 12.2H58.2c-12.6 0-23-4-31.2-12.2S14.8 522.6 14.8 510s4-23 12.2-31.2s18.6-12.2 31.2-12.2h912.4c12.6 0 23 4 31.2 12.2zm0 347.4c8.2 8.2 12.2 18.6 12.2 31.2s-4 23-12.2 31.2s-18.6 12.2-31.2 12.2H58.2c-12.6 0-23-4-31.2-12.2S14.8 870 14.8 857.4s4-23 12.2-31.2S45.6 814 58.2 814h912.4c12.6 0 23 4.2 31.2 12.2z" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
