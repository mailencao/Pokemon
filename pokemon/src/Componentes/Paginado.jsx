import { useState, useEffect } from 'react'

function Paginado( {setPage} ) {
     //evento al click adelante, suma 1
    const handleAdelante = () => {
       setPage( (estadoAnterior) => {return estadoAnterior + 1} )
       
    }
    //evento al click, mientras resultado anterior sea mayor a uno resta-1, entra en el else si es 1 y retorna 1.
    const handleAtras = () => {
        setPage( (estadoAnterior) => {
        if (estadoAnterior > 1 ) { 
            return estadoAnterior - 1
        } else {
            return estadoAnterior
        }
    } )
    }



    return<>
    <button onClick={handleAtras}>atras</button>
    <button onClick={handleAdelante}>adelante</button>
    </>
};

export default Paginado;
