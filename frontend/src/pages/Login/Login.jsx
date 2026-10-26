import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { validateLogin } from '../../utils/validation';
import authService from '../../services/authService';
import './Login.scss';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Button from '../../components/Button/Button';

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  // Recuperamos el mensaje de signup exitoso si existe
  const location = useLocation();
  const message = location.state?.message;

  // Mensajes de error frontend
  const [errors, setErrors] = useState({});

  // Mensajes de error backend
  const [serverError, setServerError] = useState('');

  // Visibilizar/ocultar contraseña
  const [showPassword, setShowPassword] = useState(false);

  // Mensajes de error del servidor
  const messages = {
    INVALID_CREDENTIALS:
      'El correo electrónico o la contraseña son incorrectos.',

    INCOMPLETE_DATA: 'Debes completar todos los campos.',
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
    const validationErrors = validateLogin(formData);

    // Convertimos el objeto en un array para verificar si hay errores
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});

    // fetch
    try {
      const { success, code } = await authService.login(formData);
      if (success) {
        setServerError('');
        navigate('/app');
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
      <main className="main login__main">
        {message && (
          <p className="login__success" role="status">
            {message}
          </p>
        )}
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
                className={`login__input ${errors.email && 'is-error'}`}
                type="email"
                id="email"
                name="email"
                placeholder="correo@correo.com"
                required
                autoComplete="email"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
                value={formData.email}
                onChange={handleInputChange}
              />
              {errors.email && (
                <p className="text-error" id="email-error">
                  {errors.email}
                </p>
              )}
            </div>
            <div className="login__form-section">
              <label className="login__label" htmlFor="password">
                Contraseña
              </label>
              <div className="login__password-wrapper">
                <input
                  className={`login__input ${errors.password && 'is-error'}`}
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  minLength={8}
                  placeholder="********"
                  required
                  autoComplete="current-password"
                  aria-invalid={!!errors.password}
                  aria-describedby={
                    errors.password ? 'password-error' : undefined
                  }
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
                <p className="text-error" id="password-error">
                  {errors.password}
                </p>
              )}
            </div>

            {serverError && (
              <p className="text-error server-error" role="alert">
                {serverError}
              </p>
            )}

            <Button
              className="button"
              type="submit"
              variant="button--primary button--full"
            >
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
