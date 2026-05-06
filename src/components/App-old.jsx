import '../styles/App.scss';
import { useState, useEffect } from 'react';
import ls from '../services/localStorage';
// import DeleteIcon from '../assets/delete-icon.svg';

function App() {
  const [tasks, setTasks] = useState(
    ls.get('data', [
      { task: 'Comprar harina, jamón y pan rallado', completed: true },
      { task: 'Hacer croquetas ricas', completed: true },
      { task: 'Ir a la puerta de un gimnasio', completed: false },
      {
        task: 'Comerme las croquetas mirando a la gente que entra en el gimnasio',
        completed: false,
      },
      { task: 'Echarme una siesta', completed: false },
    ])
  );

  const [search, setSearch] = useState('');
  const [newTaskInput, setNewTaskInput] = useState('');

  useEffect(() => {
    ls.set('data', tasks);
  }, [tasks]);

  // Calcula las tareas completadas
  const completed = tasks.filter((task) => {
    return task.completed;
  });

  // Calcula las tareas pendientes
  const pending = tasks.filter((task) => {
    return !task.completed;
  });

  // Función del evento del buscador
  const handleSearcherInput = (ev) => {
    const value = ev.target.value;
    setSearch(value);
  };

  // Función de evento que cambia la propiedad completed de task
  const handleClickItem = (ev) => {
    const idItem = ev.currentTarget.id;
    const clickedTask = tasks.find((task, index) => {
      return index === parseInt(idItem);
    });

    clickedTask.completed = !clickedTask.completed;
    setTasks([...tasks]);
  };

  // Función de evento que guarda una nueva tarea en el estado
  const handleCreateTask = (ev) => {
    setNewTaskInput(ev.target.value);
  };

  const handleClickCreateBtn = (ev) => {
    ev.preventDefault();
    // Creamos el objeto de tarea
    const newTask = { task: newTaskInput, completed: false };
    // Lo añadimos al estado con el resto de tareas
    setTasks([...tasks, newTask]);
    // Limpiamos el input después de añadir la tarea
    setNewTaskInput('');
  };

  const handleDeleteTask = (ev) => {
    ev.stopPropagation();
    const clickedId = ev.currentTarget.id;
    const restOfTasks = tasks.filter((task, index) => {
      return index !== Number(clickedId);
    });

    setTasks(restOfTasks);
  };

  const renderTasks = () => {
    return tasks
      .filter((task) => {
        return task.task.toLowerCase().includes(search.toLowerCase());
      })
      .map((task, index) => {
        return (
          <li
            key={index}
            className={`tasks__item
          ${task.completed ? 'tasks__item--completed' : ''}`}
            onClick={handleClickItem}
            id={index}
          >
            {task.task}
            <button
              className="tasks__btn"
              aria-label="Eliminar tarea"
              id={index}
              onClick={handleDeleteTask}
            >
              <svg
                viewBox="0 0 24 24"
                className="delete-icon"
                aria-hidden="true"
              >
                <path d="M17,4V5H15V4H9V5H7V4A2,2,0,0,1,9,2h6A2,2,0,0,1,17,4Z" />
                <path d="M20,6H4A1,1,0,0,0,4,8H5V20a2,2,0,0,0,2,2H17a2,2,0,0,0,2-2V8h1a1,1,0,0,0,0-2ZM11,17a1,1,0,0,1-2,0V11a1,1,0,0,1,2,0Zm4,0a1,1,0,0,1-2,0V11a1,1,0,0,1,2,0Z" />
              </svg>
            </button>
          </li>
        );
      });
  };

  return (
    <>
      <header className="header">
        <h1 className="header__title">Mi lista de tareas</h1>
        <form className="searcher">
          <label className="searcher__label" htmlFor="search">
            Buscador:
          </label>
          <input
            className="searcher__input"
            type="text"
            name="search"
            id="search"
            value={search}
            onChange={handleSearcherInput}
          />
        </form>
      </header>

      <main className="main">
        <section className="create">
          <form className="create__form">
            <label className="create__label" htmlFor="newTask">
              Nueva tarea:
            </label>
            <input
              className="create__input"
              type="text"
              id="newTask"
              value={newTaskInput}
              onChange={handleCreateTask}
            />
            <button className="create__btn" onClick={handleClickCreateBtn}>
              Añadir tarea
            </button>
          </form>
        </section>

        <section className="tasks">
          <ol className="tasks__list">{renderTasks()}</ol>
        </section>
        <section className="recount">
          <p className="recount__text">
            Tareas totales:{' '}
            <span className="recount__number">{tasks.length}</span>
          </p>
          <p className="recount__text">
            Tareas completadas:{' '}
            <span className="recount__number">{completed.length}</span>
          </p>
          <p className="recount__text">
            Tareas pendientes:{' '}
            <span className="recount__number">{pending.length}</span>
          </p>
        </section>
      </main>
    </>
  );
}

export default App;
