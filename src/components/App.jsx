import Header from './Header/Header';
import NewTask from './NewTask/NewTask';
import Tasks from './Tasks/Tasks';
import PendingIcon from './icons/PendingIcon';
import CompletedIcon from './icons/CompletedIcon';
// import { useState, useEffect } from 'react';
// import fetchData from "../services/api"; // Al ser .js no hay que poner la extensión
// import ls from "../services/localStorage";

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

  /* Llamado a API:
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData("https://api.com/users")
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  */

  return (
    <>
      <Header />
      <main>
        <NewTask />
        <Tasks title="Tareas pendientes" icon={<PendingIcon />} />
        <Tasks title="Tareas completadas" icon={<CompletedIcon />} />
      </main>
    </>
  );
}

export default App;
