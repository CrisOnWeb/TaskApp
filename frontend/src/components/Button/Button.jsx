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
  className,
  ...rest
}) => {
  if (to) {
    const Component = isNav ? NavLink : Link;

    return (
      <Component to={to} className={`button ${variant} ${className}`} {...rest}>
        {children}
      </Component>
    );
  }

  if (href) {
    return (
      <a href={href} className={`button ${variant} ${className}`} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={`button ${variant} ${className}`}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
