import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

//Componentes
import IndexPage from './componentes/Index/IndexPage.js';
import Vehiculos from './componentes/Vehiculos/Vehiculos';


function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path='/' element={<IndexPage />} />
          <Route path='/vehiculos/formulario' element={<Vehiculos />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
