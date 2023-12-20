import { useState, useEffect } from 'react';
import Pokemons from './Componentes/Pokemons';
import Navbar from './Componentes/Navbar';
import Buscador from './Componentes/Buscador';

function App() {
  // estados para almacenar los datos de la API
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState([]);
  const [info, setInfo] = useState('');
  // URL de la API
  const initialUrl = "https://pokeapi.co/api/v2/pokemon/";

  // realiza la primer solicitud de datos a la API
  function fetchPokePage(url) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // extraer los resultados y la info de paginación
        const newPokemons = data.results || [];
        setPage(newPokemons);
        setInfo({
          nextPage: data.next,
          previousPage: data.previous,
        });
      })
      .catch((error) => console.error(error));
  }
 // carga la primera pag y cambia la cantidad de pokemons que se muestran
   useEffect(() => {
    fetchPokePage(`${initialUrl}?limit=24`);
  }, []);

 // carga los datos de cada pokemon cuando cambia la pag
 //recorre el array de promesas, las parsea, las cumple y devuelve un array pokemons y sus respectivos datos
  useEffect(() => {
    if (Array.isArray(page)) {
      let pokeArray = page.map((poke) => fetch(poke.url).then((response) => response.json())
      );
      //aca resuelve todas las promesas
      Promise.all(pokeArray)
        .then((data) => {
          setPokemons(data);
        })
        .catch((error) => console.error(error));
    }
  }, [page]);

  //funciones para cargar las paginas anterior si esta y siguiente 

  const prev = () => {
    if (info.previousPage) {
      fetchPokePage(info.previousPage);
    }
  };

  const next = () => {
    if (info.nextPage) {
      fetchPokePage(info.nextPage);
    }
  };

  return (
    <>
      <Navbar />
      <Buscador />
      <div className='botoneraSup'>
       {info.previousPage ? <button className='boton pag' onClick={prev}>Anterior</button> : null}
       {info.nextPage ? <button className='boton pag' onClick={next}>Próximo</button> : null}
      </div>
      <Pokemons pokemons={pokemons} />
      <div className='botonera'>
       {info.previousPage ? <button className='boton pag' onClick={prev}>Anterior</button> : null}
       {info.nextPage ? <button className='boton pag' onClick={next}>Próximo</button> : null}
      </div>
    </>
  );
}

export default App;

