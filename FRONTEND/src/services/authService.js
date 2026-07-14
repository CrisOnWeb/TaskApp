import fetchData from './api';
import ls from './localStorage';

const URL = 'http://localhost:4000';
const TOKEN_KEY = 'token';

const login = async (formData) => {
  const response = await fetchData('/api/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });

  if (response.success) {
    ls.set(TOKEN_KEY, response.token);
  }

  return response;
};

export default { login };
