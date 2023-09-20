import React from 'react';
/*puede funcionar igual sin importar el React, a partir de la versión 17
antes si había que importarlo */
import '../hojas-de-estilo/Boton.css'

function Boton({texto, esBotonDeClic, manejarClic}){
return(
<button 
className={esBotonDeClic ? 'boton-clic' : 'boton-reiniciar'}
onClick={manejarClic}>    
{texto}
</button>
);
}

export default Boton;