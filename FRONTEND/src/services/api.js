// url es la url del fetch y options es un objeto para poder pasarle el tipo de petición (GET, POST...), headers, datos, etc.
const fetchData = async (url, options = {}) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};

export default fetchData;
