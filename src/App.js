
import './App.css';
import {

  Routes as Switch,
  Route
} from "react-router-dom";

import { Main } from './components/main/main';
import { DetailView } from './components/detailview';

import { Menu } from './components/header';

function App() {

  //Si me da tiempo añadir Header y Footer
 
  return (
    <div className="App">
        <Menu />
        <Switch>
          <Route path="/" element={<Main />}/>
          <Route path="/:id" element={<DetailView/>}/> 
        </Switch>

    
    </div>
  );
}

export default App;
