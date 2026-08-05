import './Button.scss';
import { NavLink, Link } from 'react-router-dom';

const Button = ({
  children,
  variant = '',
  to,
  href,
  type = 'button',
  onClick,
  isNav = false,
}) => {
  if (to) {
    const Component = isNav ? NavLink : Link;

    return (
      <Component to={to} className={`button ${variant}`}>
        {children}
      </Component>
    );
  }

  if (href) {
    return (
      <a href={href} className={`button ${variant}`}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={`button ${variant}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
