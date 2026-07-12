import { useState } from 'react';
import { Link } from 'react-router-dom';
import { validateLogin } from '../../utils/validation';
import './Login.scss';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Button from '../../components/Button/Button';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  // Mensajes de error
  const [errors, setErrors] = useState({});

  // Visibilizar/ocultar contraseña
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // validar formulario
    const validationErrors = validateLogin(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});

    // fetch
  };

  return (
    <>
      <Header />
      <main className="main login__main">
        <section className="login">
          <h2 className="login__title">Iniciar sesión</h2>
          <p className="login__description">
            Bienvenida de nuevo. Continúa donde lo dejaste.
          </p>
          <form className="login__form" noValidate onSubmit={handleSubmit}>
            <div className="login__form-section">
              <label className="login__label" htmlFor="email">
                Correo electrónico
              </label>
              <input
                className={`signup__input ${errors.email && 'is-error'}`}
                type="email"
                id="email"
                name="email"
                placeholder="correo@correo.com"
                required
                autoComplete="email"
                value={formData.email}
                onChange={handleInputChange}
              />
              {errors.email && <p className="text-error">{errors.email}</p>}
            </div>
            <div className="login__form-section">
              <label className="login__label" htmlFor="password">
                Contraseña
              </label>
              <div className="login__password-wrapper">
                <input
                  className={`signup__input ${errors.password && 'is-error'}`}
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  minLength={8}
                  placeholder="********"
                  required
                  autoComplete="current-password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
                <button
                  type="button"
                  className="login__password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={
                    showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="login__password-icon"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                </button>
              </div>
              {errors.password && (
                <p className="text-error">{errors.password}</p>
              )}
            </div>
            <Button type="submit" variant="button--primary button--full">
              Iniciar sesión
            </Button>
          </form>
          <div className="login__signup">
            <p className="login__signup-text">¿No tienes cuenta?</p>
            <Link className="login__signup-link" to="/signup">
              Regístrate
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Login;
