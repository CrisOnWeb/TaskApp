import './Header.scss';
import { useLocation, useNavigate, Link } from 'react-router';
import authService from '../../services/authService';
import HeaderNav from './HeaderNav';
import logo from '../../assets/img/logo.svg';

const Header = ({ search, setSearch }) => {
  const { pathname } = useLocation();

  const navigate = useNavigate();

  // Recuperar user
  const user = authService.getUser();

  // Cerrar sesión
  const handleLogout = () => {
    authService.logoutUser();

    navigate('/login');
  };

  // Array que contendrá los enlaces del Header
  const navItems = [];

  // Variable boolean para verificar si la ruta es página principal
  const isApp = pathname === '/app';

  // Objetos de navegación
  const homeItem = { label: 'Inicio', to: '/', type: 'link' };

  const loginItem = {
    label: 'Iniciar sesión',
    to: '/login',
    type: 'button',
    variant: 'button--secondary',
  };

  const signupItem = {
    label: 'Registrarse',
    to: '/signup',
    type: 'button',
    variant: 'button--primary',
  };

  const logoutItem = {
    label: 'Cerrar sesión',
    type: 'button',
    variant: 'button--secondary',
    onClick: handleLogout,
  };

  switch (pathname) {
    case '/':
      navItems.push(loginItem, signupItem);
      break;

    case '/login':
      navItems.push(homeItem, signupItem);
      break;

    case '/signup':
      navItems.push(homeItem, loginItem);
      break;

    case '/app':
      navItems.push(logoutItem);
      break;

    case '/privacy':
    case '/terms':
    case '/contact':
      navItems.push(homeItem, loginItem);
      break;

    default:
      navItems.push(homeItem, loginItem);
  }

  const handleSearchInput = (ev) => {
    setSearch(ev.target.value);
  };

  return (
    <header className={`header ${isApp ? 'header-app' : ''}`}>
      <div
        className={`header__inner central-column ${isApp ? 'header-app__inner' : ''}`}
      >
        <Link to="/" className="header__logoAndName">
          <img className="header__logo" src={logo} alt="" />
          <h1 className="header__name">TaskApp</h1>
        </Link>

        {isApp && (
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
        )}

        {isApp && (
          <p className="header__user">
            ¡Hola, <span className="header__user-name">{user.name}</span>!
          </p>
        )}

        <HeaderNav navItems={navItems} />
      </div>
    </header>
  );
};

export default Header;
