import '../Componentes/Buscador.css';
import { useState } from 'react';
import Pokemons from './Pokemons';

function Buscador() {
  const [pokemonName, setPokemonName] = useState('');
  const [pokemonData, setPokemonData] = useState(null);
  const [error, setError] = useState(null);
 //evento target 
  const handleInputChange = (event) => {
    setPokemonName(event.target.value);
  };
//evento busqueda
  const handleSearch = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`); //toLowerCase pasa el texto a minusculas
      const data = await response.json();
      setPokemonData(data);
      setError(null);
    } catch (error) {
      setError('Pokemon no encontrado');
      setPokemonData(null);
    }
  };
 //evento de reseteo
  const handleReset = () => {
    setPokemonName('');
    setPokemonData(null);
    setError(null);
  };

  return (
    <>
      <h3 className='titulo'>Pokedéx lista para iniciar</h3>
      <form className='container-buscador' onSubmit={handleSearch}>
        <input type='text' placeholder='Ditto' className='imput-buscar' value={pokemonName} onChange={handleInputChange} />
        <button type='submit' className='boton'>
          ¡¡Buscalo!!
        </button>
      </form>
      {error && <p>{error}</p>}
      {pokemonData && (
        <div>
          <Pokemons  pokemons={[pokemonData]} />
           <div className='divBorrar'>
            <button type='button' onClick={handleReset} className='boton botonBorrar'>
             borrar
            </button>
           </div>
        </div>
      )}
      </>
  );
}

export default Buscador;