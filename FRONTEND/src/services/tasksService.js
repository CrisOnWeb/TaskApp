import fetchData from './api';

const API_URL =
  import.meta.env.MODE === 'development' ? 'http://localhost:4000' : '';

// Recuperar TODAS las tareas
const getTasks = async () => {
  const response = await fetchData(`${API_URL}/api/tasks`, {}, true);

  return response;
};

export default { getTasks };
