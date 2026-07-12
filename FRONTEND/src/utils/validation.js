// Valida el formato del correo
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// --------------------
// LOGIN
// --------------------

export const validateLogin = (formData) => {
  const errors = {};

  if (!formData.email.trim()) {
    errors.email = 'El correo electrónico es obligatorio.';
  } else if (!emailRegex.test(formData.email)) {
    errors.email = 'Introduce un correo electrónico válido.';
  }

  if (!formData.password) {
    errors.password = 'La contraseña es obligatoria.';
  } else if (formData.password.length < 8) {
    errors.password = 'La contraseña debe tener al menos 8 caracteres.';
  }

  return errors;
};

// --------------------
// SIGNUP
// --------------------

export const validateSignup = (formData) => {
  const errors = {};

  if (!formData.username.trim()) {
    errors.username = 'El nombre de usuario es obligatorio.';
  } else if (formData.username.length < 3) {
    errors.username = 'El nombre de usuario debe tener al menos 3 caracteres.';
  }

  if (!formData.email.trim()) {
    errors.email = 'El correo electrónico es obligatorio.';
  } else if (!emailRegex.test(formData.email)) {
    errors.email = 'Introduce un correo electrónico válido.';
  }

  if (!formData.password) {
    errors.password = 'La contraseña es obligatoria.';
  } else if (formData.password.length < 8) {
    errors.password = 'La contraseña debe tener al menos 8 caracteres.';
  }

  if (!formData.confirmPassword) {
    errors.confirmPassword = 'Repite la contraseña.';
  } else if (formData.password !== formData.confirmPassword) {
    errors.confirmPassword = 'Las contraseñas no coinciden.';
  }

  return errors;
};
