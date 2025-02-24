import './App.css';

const App = () =>{

  // let nombre = `juan carlos`
  let datos = {
    nombre:'Saul',
    apellido:'Gonzalez',
    edad:47
  }

  let ciudad ={
    nombre:'Mexico',
    habitantes: 60000000
  }

  let frutas = ['manzana','pera','uva']

  //destructuring

  const {nombre} = datos
  const {nombre:nombreCiudad} = ciudad

  return (
    <div>
      <h1 className='cambiarColor'>{frutas[2]} {nombreCiudad}</h1>
    </div>

  );
}

export default App;
