import './Button.scss';
import { Link } from 'react-router-dom';

const Button = ({ children, variant, to, type, onClick }) => {
  return (
    <>
      {to ? (
        <Link className={`button ${variant}`} to={to}>
          {children}
        </Link>
      ) : (
        <button
          type={type ? type : 'button'}
          className={`button ${variant}`}
          onClick={onClick}
        >
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
