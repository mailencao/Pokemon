import './PokeCards.css'

function Pokemons({ pokemons }) {
    return ( 
      <div className='padreCard'>
        {pokemons.map((pokemons, indice) => (
            <div key={indice} >
              <div>
                <div className="divContainer">
                   <img src={pokemons.sprites.other["official-artwork"].front_default} alt="personaje" />
                   <div className='nameId'>
                    <h2 id='number'>#{pokemons.id}</h2> 
                    <h2 id='name'>{pokemons.name}</h2>
                   </div>              
                 </div>
               </div>
            </div>
         ))
        }
      </div>
    );
}

export default Pokemons;