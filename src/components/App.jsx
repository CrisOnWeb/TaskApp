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
  /* local storage
  // En vez de leer la propiedad name leemos la propiedad data y su valor por defecto es un objeto vacío: ls.get('data', {})
  // Del objeto (vacío o relleno que nos devuelve ls.get) obtenemos la propiedad name: ls.get('data', {}).name
  // Si la propiedad name existe la usamos, si no, usamos un string vacío: ls.get('data', {}).name || ''
  const [name, setName] = useState(ls.get("data", {}).name || "");
  // Lo mismo para el email
  const [email, setEmail] = useState(ls.get("data", {}).email || "");

  // Usamos useEffect para guardar los datos en el local storage
  useEffect(() => {
    // En vez de guardar el nombre por un lado y el email por otro
    // Guardamos en el local storage un objeto data con las propiedad name y email: { name: 'loquesea', email: 'loquefuere' }
    ls.set("data", {
      name: name,
      email: email,
    });
  }, [name, email]);
  */

  const [tasks, setTasks] = useState(
    ls.get('data', [
      { id: crypto.randomUUID(), task: 'Llamar al dentista', completed: false },
      {
        id: crypto.randomUUID(),
        task: 'Pedir cita para la declaración de la renta',
        completed: true,
      },
      { id: crypto.randomUUID(), task: 'Llamar a mi madre', completed: false },
    ])
  );
  const [newTaskInput, setNewTaskInput] = useState('');
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    ls.set('data', tasks);
  }, [tasks]);

  const pendingTasks = tasks.filter((task) => !task.completed);
  const completedTasks = tasks.filter((task) => task.completed);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const ToggleTask = (id) => {
    return setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <>
      <Header search={search} setSearch={setSearch} />
      <main>
        <NewTask
          newTaskInput={newTaskInput}
          setNewTaskInput={setNewTaskInput}
          onAddTask={addTask}
        />
        <FilterTasks />
        <Tasks
          title="Tareas pendientes"
          icon={<PendingIcon />}
          tasks={pendingTasks}
          onToggleTask={ToggleTask}
        />
        <Tasks
          title="Tareas completadas"
          icon={<CompletedIcon />}
          tasks={completedTasks}
          onToggleTask={ToggleTask}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
