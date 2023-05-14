import './App.css';
import { Route, Routes } from 'react-router-dom';
import Kompyuter from './pages/Kompyuter/Kompyuter';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/'element={<Home />} />
        <Route path='/kompyuter'element={<Kompyuter />} />
      </Routes>
    </div>
  );
}

export default App;
