import ls from './localStorage';

// url es la url del fetch y options es un objeto para poder pasarle el tipo de petición (GET, POST...), headers, datos, etc.
const fetchData = async (url, options = {}, requiresAuth = false) => {
  const token = ls.get('token', null);

  // Se añade el token al objeto options solo si es necesario y si el token existe
  if (requiresAuth && token) {
    options = {
      ...options,
      headers: { ...options.headers, Authorization: `Bearer ${token}` },
    };
  }

  const response = await fetch(url, options);

  // Se borra el token si el servidor envía status 401 (no autorizado)
  // Sirve para tokens inválidos y caducados
  if (response.status === 401 && requiresAuth) {
    ls.remove('token');
    throw new Error('Unauthorized');
  }

  const data = await response.json();

  return data;
};

export default fetchData;
