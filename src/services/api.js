// url es la url del fetch y options es un objeto para poder pasarle el tipo de petición (GET, POST...), headers, datos, etc.
const fetchData = (url, options = {}) => {
  return fetch(url, options)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Error en la petición');
      }
      return response.json();
    })
    .then((data) => {
      /* Puedes filtrar los datos que te devuelve con un map
        return data.map((user) => {
        id: user.id,
        name: user.name,
      });
      */
      return data;
    });
};

export default fetchData;
