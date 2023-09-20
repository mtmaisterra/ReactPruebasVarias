import React from 'react';
import '../hojas-de-estilo/Contador.css';

function Contador({ numClics }){
    /*se suele dejar un espacio entre cada {} para facilitar la lectura del código*/
    return(
        <div className='contador'>
{numClics}
        </div>
    )
}
export default Contador;
