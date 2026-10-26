import './TaskApp.scss';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import tasksService from '../../services/tasksService';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import NewTask from '../../components/NewTask/NewTask';
import Tasks from '../../components/Tasks/Tasks';
import PendingIcon from '../../components/icons/PendingIcon';
import CompletedIcon from '../../components/icons/CompletedIcon';
import FilterTasks from '../../components/FilterTasks/FilterTasks';
import TaskSummary from '../../components/TaskSummary/TaskSummary';
import authService from '../../services/authService';

const TaskApp = () => {
  const [tasks, setTasks] = useState([]);
  const [newTaskInput, setNewTaskInput] = useState('');
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');

  const navigate = useNavigate();

  // Recuperar tareas del servidor
  useEffect(() => {
    const loadTasks = async () => {
      try {
        const data = await tasksService.getTasks();

        setTasks(data.results);
      } catch (error) {
        if (error.status === 401) {
          authService.logoutUser();
          navigate('/login', { replace: true });
          return;
        }
      }
    };

    loadTasks();
  }, [navigate]);

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
        normalizeText(task.title).includes(searchedText)
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

  // Añadir tarea
  const addTask = async (title) => {
    // Creamos el objeto que espera la API
    const newTask = {
      title,
    };

    // POST al backend
    try {
      const response = await tasksService.createTask(newTask);

      // Añadir al estado la tarea devuelta por el backend
      setTasks((prevTasks) => [...prevTasks, response.result]);
    } catch (error) {
      if (error.status === 401) {
        authService.logoutUser();
        navigate('/login', { replace: true });
        return;
      }
    }
  };

  // Borrar tarea
  const deleteTask = async (id) => {
    try {
      // DELETE al backend
      await tasksService.deleteTask(id);

      // Eliminar del estado la misma tarea
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    } catch (error) {
      if (error.status === 401) {
        authService.logoutUser();
        navigate('/login', { replace: true });
        return;
      }
    }
  };

  // Modificar tarea
  const toggleTask = async (id) => {
    // Busco la tarea en el estado
    const task = tasks.find((task) => task.id === id);

    // Si la task no existiera
    if (!task) return;

    // Creo el objeto a enviar al backend
    const updatedTask = {
      title: task.title,
      completed: !task.completed,
    };

    // PUT al backend
    try {
      await tasksService.updateTask(id, updatedTask);

      // Modifico completed de la tarea en el estado
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === id
            ? {
                ...task,
                title: updatedTask.title,
                completed: updatedTask.completed,
              }
            : task
        )
      );
    } catch (error) {
      if (error.status === 401) {
        authService.logoutUser();
        navigate('/login', { replace: true });
        return;
      }
    }
  };

  const handleFilterChange = (status) => {
    setFilter(status);
  };
  return (
    <>
      <Header search={search} setSearch={setSearch} />
      <main className="main main--app central-column">
        <aside className="aside-menu">
          <NewTask
            newTaskInput={newTaskInput}
            setNewTaskInput={setNewTaskInput}
            onAddTask={addTask}
          />
          <FilterTasks
            filter={filter}
            handleFilterChange={handleFilterChange}
          />
          <TaskSummary
            pendingTasksSummary={pendingTasksSummary}
            completedTasksSummary={completedTasksSummary}
          />
        </aside>
        <div className="content">
          {(filter === 'pending' || filter === 'all') && (
            <Tasks
              title="Tareas pendientes"
              numberOfTasks={numberOfPendingTasks}
              icon={<PendingIcon />}
              tasks={searchedPendingTasks}
              onToggleTask={toggleTask}
              onDeleteTask={deleteTask}
              emptyMessage="🎉 ¡Bien hecho! No hay tareas pendientes."
            />
          )}
          {(filter === 'completed' || filter === 'all') && (
            <Tasks
              title="Tareas completadas"
              numberOfTasks={numberOfCompletedTasks}
              icon={<CompletedIcon />}
              tasks={searchedCompletedTasks}
              onToggleTask={toggleTask}
              onDeleteTask={deleteTask}
              emptyMessage="🌱 Tus tareas completadas aparecerán aquí."
            />
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default TaskApp;
