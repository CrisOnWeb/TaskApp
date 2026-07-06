import './Button.scss';
import { NavLink, Link } from 'react-router-dom';

const Button = ({
  children,
  variant = '',
  to,
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

  return (
    <button type={type} className={`button ${variant}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
