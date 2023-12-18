import { useState, useEffect } from 'react'
import Pokemons from './Componentes/Pokemons'
import Navbar from './Componentes/Navbar';
import Buscador from './Componentes/Buscador';

function App() {
  //variables de primer url page y array donde estaran los datos de los pokemons.
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState([]);
  //url appi
  const initialUrl = "https://pokeapi.co/api/v2/pokemon/";  

 //primer llamado a la api
  function fetchPokePage(url) {
    fetch (url)
    .then(respuesta => respuesta.json())
    .then(datos => {
      setPage(datos.results);
    })
   .catch(error => console.log(error));
  }

  function test(){
    console.log(page);
  }

  useEffect(() => {
    fetchPokePage(initialUrl);
  }, []);
 //recorre el array de promesas, las parsea, las cumple y devuelve un array pokemons y sus respectivos datos
  useEffect(() => {
    let pokeArray = page.map(pokeIndex =>fetch(pokeIndex.url).then(respuesta => respuesta.json())); 
    Promise.all(pokeArray)
    .then(datos => {
      setPokemons(datos)
    })
  }, [page]);

  useEffect(() => { 
    console.log(pokemons);
  }, [pokemons]);
  
  return <>
  <Navbar />
  <Buscador />
  <Pokemons pokemons={pokemons} />
  </>
};

export default App;

