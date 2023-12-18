import '../Componentes/Buscador.css'

function Buscador() {
 
    return(
        <>
          <h3 className='titulo'>Pokedéx Lista para iniciar</h3> 
          <form className='container-buscador'>
            <input type='text' placeholder='Ditto' className='imput-buscar'></input>
            <button className='boton-buscar'>
             ¡¡Buscalo!!
            </button>
          </form>     
        </>
    )

}

export default Buscador;