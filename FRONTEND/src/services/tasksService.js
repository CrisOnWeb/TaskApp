import fetchData from './api';

const API_URL =
  import.meta.env.MODE === 'development' ? 'http://localhost:4000' : '';

// Recuperar TODAS las tareas
const getTasks = async () => {
  const response = await fetchData(`${API_URL}/api/tasks`, {}, true);

  return response;
};

const postTasks = async (newTask) => {
  const response = await fetchData(
    `${API_URL}/api/tasks`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTask),
    },
    true
  );

  return response;
};

export default { getTasks, postTasks };
