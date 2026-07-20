import fetchData from './api';
import ls from './localStorage';

const API_URL =
  import.meta.env.MODE === 'development' ? 'http://localhost:4000' : '';
const TOKEN_KEY = 'token';

const login = async (formData) => {
  const response = await fetchData(`${API_URL}/api/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });

  if (response.success) {
    ls.set(TOKEN_KEY, response.token);
    ls.set('user', { name: response.user.name });
  }

  return response;
};

const signup = async (formData) => {
  const response = await fetchData(`${API_URL}/api/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });

  if (response.success) {
    ls.set(TOKEN_KEY, response.token);
  }

  return response;
};

const isAuthenticated = () => {
  return !!ls.get('token', null);
};

const getUser = () => {
  return ls.get('user');
};

const logoutUser = () => {
  ls.remove(TOKEN_KEY);
  ls.remove('user');
};

export default { login, signup, isAuthenticated, getUser, logoutUser };
