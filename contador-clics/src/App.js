import './App.css';
import freeCodeCampLogo from './imagenes/Logo-freeCodeCamp.png';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import {useState} from 'react'; 
/* useState es un hook de estado, es uno de los más importantes y usados*/

function App() {

  const [numClics, setNumClics]= useState(0);
/*En ingles se usa la palabra 'set' seguida del nombre del estado. 
El valor (0) es el valor de incio */

  const manejarClic = () => {
    setNumClics(numClics + 1);/*se asigna el ';' al final de la función flecha (=>)*/
    /*de esta forma se asigna un nuevo valor a numClics, actualiza el estado */
  }

  const reiniciarContador = () => {   
    setNumClics(0);
    /*vuelve a reiniciar el contador en 0 */
  }

  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>

        <img
          className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt='Logo de freeCodeCamp' />
          /*se suele dejar un espacio antes de cerrar el elemento por estandar*/
      </div>
      <div className='contenedor-principal'>
      <Contador numClics = {numClics} /> /*se pasa como props el número de clics */
        <Boton
          texto='Clic'
          esBotonDeClic={true}
          manejarClic={manejarClic}
        />
        <Boton
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
