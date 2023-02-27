import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

//Componentes
import IndexPage from './componentes/Index/IndexPage.js';


function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path='/' element={<IndexPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
