import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ls from '../services/localStorage';
import authService from '../services/authService';
import TaskApp from '../pages/TaskApp/TaskApp';
import Landing from '../pages/Landing/Landing';
import Login from '../pages/Login/Login';
import Signup from '../pages/Signup/Signup';

function App() {
  const [tasks, setTasks] = useState(
    ls.get('data', [
      {
        id: crypto.randomUUID(),
        text: 'Aprender a utilizar TaskApp',
        completed: false,
      },
      {
        id: crypto.randomUUID(),
        text: 'Crear una nueva tarea',
        completed: false,
      },
      { id: crypto.randomUUID(), text: 'Eliminar una tarea', completed: false },
    ])
  );
  const [newTaskInput, setNewTaskInput] = useState('');
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    ls.set('data', tasks);
  }, [tasks]);

  const normalizeText = (text) => {
    return text
      .normalize('NFD') // Separa acentos
      .replace(/[\u0300-\u036f]/g, '') // Elimina acentos
      .toLowerCase() // Minúsculas
      .trim(); // elimina espacios
  };

  const searchedTasks = (filteredTasks) => {
    // Si search está vacío, devuelvo todas las tareas
    if (!search.trim()) {
      return filteredTasks;
    } else {
      // Si no, filtro por el contenido de search
      const searchedText = normalizeText(search);
      return filteredTasks.filter((task) =>
        // Recojo las tareas que coincidan
        normalizeText(task.text).includes(searchedText)
      );
    }
  };

  // Se filtran las tareas según su estado
  const pendingTasks = tasks.filter((task) => !task.completed);
  const completedTasks = tasks.filter((task) => task.completed);

  // Se filtran por búsqueda de la usuaria
  const searchedPendingTasks = searchedTasks(pendingTasks);
  const searchedCompletedTasks = searchedTasks(completedTasks);

  // Se calcula la cantidad de tareas según status
  // Usamos las variables de búsqueda porque queremos que se actualice cuando buscamos
  const numberOfPendingTasks = searchedPendingTasks.length;
  const numberOfCompletedTasks = searchedCompletedTasks.length;
  // Usamos las variables de tareas totales para el resumen
  const pendingTasksSummary = pendingTasks.length;
  const completedTasksSummary = completedTasks.length;

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTask = (id) => {
    return setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleFilterChange = (status) => {
    setFilter(status);
  };

  return (
    <>
      <Routes>
        <Route index element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/app"
          element={
            authService.isAuthenticated() ? (
              <TaskApp
                search={search}
                setSearch={setSearch}
                newTaskInput={newTaskInput}
                setNewTaskInput={setNewTaskInput}
                addTask={addTask}
                filter={filter}
                handleFilterChange={handleFilterChange}
                pendingTasksSummary={pendingTasksSummary}
                completedTasksSummary={completedTasksSummary}
                numberOfPendingTasks={numberOfPendingTasks}
                numberOfCompletedTasks={numberOfCompletedTasks}
                searchedPendingTasks={searchedPendingTasks}
                searchedCompletedTasks={searchedCompletedTasks}
                toggleTask={toggleTask}
                deleteTask={deleteTask}
              />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
      </Routes>
    </>
  );
}

export default App;
