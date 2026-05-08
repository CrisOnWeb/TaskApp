import Header from './Header/Header';
import Footer from './Footer/Footer';
import NewTask from './NewTask/NewTask';
import Tasks from './Tasks/Tasks';
import PendingIcon from './icons/PendingIcon';
import CompletedIcon from './icons/CompletedIcon';
import FilterTasks from './FilterTasks/FilterTasks';
import ls from '../services/localStorage';
import { useState, useEffect } from 'react';

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
    if (!search.trim()) {
      return filteredTasks;
    } else {
      const searchedText = normalizeText(search);
      return filteredTasks.filter((task) =>
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
      <main className="main">
        <NewTask
          newTaskInput={newTaskInput}
          setNewTaskInput={setNewTaskInput}
          onAddTask={addTask}
        />
        <FilterTasks filter={filter} handleFilterChange={handleFilterChange} />
        {(filter === 'pending' || filter === 'all') && (
          <Tasks
            title="Tareas pendientes"
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
            icon={<CompletedIcon />}
            tasks={searchedCompletedTasks}
            onToggleTask={toggleTask}
            onDeleteTask={deleteTask}
            emptyMessage="🌱 Tus tareas completadas aparecerán aquí."
          />
        )}
      </main>
      <Footer />
    </>
  );
}

export default App;
