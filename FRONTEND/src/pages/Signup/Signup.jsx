import './Signup.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { validateSignup } from '../../utils/validation';
import authService from '../../services/authService';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Button from '../../components/Button/Button';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  // Mensajes de error frontend
  const [errors, setErrors] = useState({});

  // Mensajes de error backend
  const [serverError, setServerError] = useState('');

  // Visibilizar/ocultar contraseña
  const [showPassword, setShowPassword] = useState(false);

  // Mensajes de error del servidor
  const messages = {
    EMAIL_ALREADY_EXISTS: 'Ya existe una cuenta con ese correo electrónico.',
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    setFormData({ ...formData, [name]: value });

    setErrors({ ...errors, [name]: '' });

    setServerError('');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // validar formulario
    const validationErrors = validateSignup(formData);

    // Convertimos el objeto en un array para verificar si hay errores
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});

    // fetch
    try {
      const { success, code } = await authService.signup(formData);
      if (success) {
        setServerError('');
      } else {
        setServerError(messages[code]);
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
      setServerError(
        'No se ha podido conectar con el servidor. Inténtalo de nuevo más tarde.'
      );
    }
  };

  return (
    <>
      <Header />
      <main className="main signup__main">
        <section className="signup">
          <h2 className="signup__title">Registrarse</h2>
          <p className="signup__description">
            Bienvenida. Estás a un paso de organizar mejor tu día.
          </p>

          <form className="signup__form" noValidate onSubmit={handleSubmit}>
            <div className="signup__form-section">
              <label className="signup__label" htmlFor="name">
                Nombre de usuario/a
              </label>
              <input
                className={`signup__input ${errors.name && 'is-error'}`}
                type="text"
                id="name"
                name="name"
                placeholder="paquita_la_del_barrio"
                required
                value={formData.name}
                onChange={handleInputChange}
              />
              {errors.name && <p className="text-error">{errors.name}</p>}
            </div>

            <div className="signup__form-section">
              <label className="signup__label" htmlFor="email">
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

            <div className="signup__form-section">
              <label className="signup__label" htmlFor="password">
                Contraseña
              </label>
              <div className="signup__password-wrapper">
                <input
                  className={`signup__input ${errors.password && 'is-error'}`}
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  minLength={8}
                  placeholder="********"
                  required
                  autoComplete="new-password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
                <button
                  type="button"
                  className="signup__password-toggle"
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
                    className="signup__password-icon"
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

            <div className="signup__form-section">
              <label className="signup__label" htmlFor="confirmPassword">
                Repetir contraseña
              </label>
              <div className="signup__password-wrapper">
                <input
                  className={`signup__input ${errors.confirmPassword && 'is-error'}`}
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="confirmPassword"
                  minLength={8}
                  placeholder="********"
                  required
                  autoComplete="new-password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                />
                <button
                  type="button"
                  className="signup__password-toggle"
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
                    className="signup__password-icon"
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
              {errors.confirmPassword && (
                <p className="text-error">{errors.confirmPassword}</p>
              )}
            </div>

            {serverError && (
              <p className="text-error server-error " role="alert">
                {serverError}
              </p>
            )}

            <Button type="submit" variant="button--primary button--full">
              Registrarse
            </Button>
          </form>
          <div className="signup__login">
            <p className="signup__login-text">¿Ya tienes cuenta?</p>
            <Link className="signup__login-link" to="/login">
              Iniciar sesión
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Signup;
