let personajes_array = [];
let homeInfoPages = [];
let identificadorPagina;
let contadorPaginas = 1;
let contadorPaginaslive = 1;
let contadorPaginasDead = 1;
let contadorPaginasMale = 1;
let contadorPaginasFemale = 1;
const baseUri = "https://rickandmortyapi.com/api/";

const gethome = () => {
  contadorPaginas = 1;
  getPersonajes();
};

const getPersonajes = () => {
  identificadorPagina = 1;
  fetch(`https://rickandmortyapi.com/api/character?page=${contadorPaginas}`)
    .then((response) => response.json())
    .then((data) => {
      personajes_array = data.results;
      homeInfoPages = data.info;
      renderPersonaje(personajes_array);
      
    }).catch(error => console.error('Error:', error));
};
getPersonajes();

const getPersonaje = (event) => {
  let personaje;
  personaje = document.getElementById("idBusqueda").value.trim();
  event.preventDefault();
  fetch(`${baseUri}character/?name=${personaje}`)
    .then((response) => response.json())
    .then((data) => {
      personajes_array = data.results;
      renderPersonaje(personajes_array);
    }).catch(error => {
      let personajeArrayError =[{name:'Personaje no encontrado',image:'https://rickandmortyapi.com/api/character/avatar/19.jpeg',status:'Sin datos',species:'Sin datos',gender:'Sin datos',origin:{name:'Sin datos'}}];
      renderPersonaje(personajeArrayError);
      console.error('Error:', error)
    });
};

const getPersonajeLive = (event) => {
  identificadorPagina = 2;
  personaje = document.getElementById("idBusqueda").value.trim();
  event.preventDefault();
  fetch(`${baseUri}character/?page=${contadorPaginaslive}&status=alive`)
    .then((response) => response.json())
    .then((data) => {
      personajes_array = data.results;
      test = data.info;
      console.log(data.results);
      renderPersonaje(personajes_array);
    }).catch(error => console.error('Error:', error));;
};

const getPersonajeDead = (event) => {
  identificadorPagina = 3;
  personaje = document.getElementById("idBusqueda").value.trim();
  event.preventDefault();
  fetch(`${baseUri}character/?page=${contadorPaginasDead}&status=dead`)
    .then((response) => response.json())
    .then((data) => {
      personajes_array = data.results;
      console.log(data.results);
      renderPersonaje(personajes_array);
    }).catch(error => console.error('Error:', error));;
};

const getPersonajeGeneroM = (event) => {
  identificadorPagina = 4;
  event.preventDefault();
  fetch(`${baseUri}character/?page=${contadorPaginasMale}&gender=male`)
    .then((response) => response.json())
    .then((data) => {
      personajes_array = data.results;
      console.log(data.results);
      renderPersonaje(personajes_array);
    }).catch(error => console.error('Error:', error));;
};

const getPersonajeGeneroF = (event) => {
  identificadorPagina = 5;
  event.preventDefault();
  fetch(`${baseUri}character/?page=${contadorPaginasFemale}&gender=female`)
    .then((response) => response.json())
    .then((data) => {
      personajes_array = data.results;
      console.log(data.results);
      renderPersonaje(personajes_array);
    }).catch(error => console.error('Error:', error));;
};

