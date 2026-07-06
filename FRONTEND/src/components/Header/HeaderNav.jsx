import './HeaderNav.scss';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import HamburgerIcon from '../icons/HamburguerIcon';
import Button from '../Button/Button';

const HeaderNav = ({ navItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="header-nav">
        <ul className="header-nav__list">
          {navItems.map((item) => (
            <li key={item.label} className="header-nav__item">
              {item.type === 'link' ? (
                <NavLink className="header-nav__link" to={item.to}>
                  {item.label}
                </NavLink>
              ) : (
                <Button
                  to={item.to}
                  onClick={item.onClick}
                  variant={item.variant}
                  isNav
                >
                  {item.label}
                </Button>
              )}
            </li>
          ))}
        </ul>
      </nav>

      <button
        className={`header-nav__hamb ${isOpen ? 'header-nav__hamb--open' : ''}`}
        aria-label="Menú"
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        onClick={() => setIsOpen(!isOpen)}
      >
        <HamburgerIcon />
      </button>

      {isOpen && (
        <nav className="header-nav-mobile" id="mobile-menu">
          <ul className="header-nav-mobile__list">
            {navItems.map((item) => (
              <li key={item.label} className="header-nav-mobile__item">
                {item.to ? (
                  <NavLink
                    className="header-nav-mobile__link"
                    to={item.to}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                ) : (
                  <button
                    className="header-nav-mobile__item"
                    onClick={() => {
                      item.onClick?.();
                      setIsOpen(false);
                    }}
                  >
                    {item.label}
                  </button>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
};

export default HeaderNav;
