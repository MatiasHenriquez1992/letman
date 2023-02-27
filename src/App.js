import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

//Componentes
import Index from './componentes/Index';


function App() {
  return (
    <div className="App">

      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path='/' element={<Index />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
