import './TaskApp.scss';
import { useState, useEffect } from 'react';
import tasksService from '../../services/tasksService';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import NewTask from '../../components/NewTask/NewTask';
import Tasks from '../../components/Tasks/Tasks';
import PendingIcon from '../../components/icons/PendingIcon';
import CompletedIcon from '../../components/icons/CompletedIcon';
import FilterTasks from '../../components/FilterTasks/FilterTasks';
import TaskSummary from '../../components/TaskSummary/TaskSummary';

const TaskApp = () => {
  const [tasks, setTasks] = useState([]);
  const [newTaskInput, setNewTaskInput] = useState('');
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const loadTasks = async () => {
      const data = await tasksService.getTasks();

      setTasks(data.results);
    };

    loadTasks();
  }, []);

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
