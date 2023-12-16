function pokemons({ pokemons }) {
    return (
    <div>
        {pokemons.map((pokemons, indice) => (
            <div key={indice}>
                <div>
                    <h4>pokemon: {pkemons.name}</h4>
                </div>
            </div>
        ) ) }   
     </div>
    );
}

export default pokemons;