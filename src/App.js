
import './App.css';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route
} from "react-router-dom";

import { Main } from './components/main/main';
import { DetailView } from './components/detailview';
import borja from './borja.jpg'


function App() {

  //Si me da tiempo añadir Header y Footer
 
  return (
    <div className="App">
        <nav className='header'>
          <img src={borja} height='55px' id='borja'></img>
          <span className='itemmenu'>Borja</span>
          <span className='itemmenu'>Documentación</span>
          <span className='itemmenu'>Recursos</span>
          <input className='itemmenu' type='search' placeholder='Busca un coche'></input>
          
          
        </nav>
        <h1>Últimos vehículos</h1>
        <Switch>
          <Route path="/" element={<Main />}/>
          <Route path="/:id" element={<DetailView/>}/> 
        </Switch>

    
    </div>
  );
}

export default App;
