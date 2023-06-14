import './App.css';
import { Routes, Route, useLocation } from "react-router-dom";
import LandingPage from './Components/LandingPage/LandingPage.jsx';
import Home from './Components/Home/Home.jsx';
import Navbar from './Components/Navbar/Navbar';
import FormCreatePokemon from './Components/FormCreate/FormCreatePokemon.jsx';

function App() {
  const location = useLocation();

  return (
      <div className="App">
        {location.pathname !== "/"
        ? <Navbar/>
        : null}
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/form' element={<FormCreatePokemon/>}/>
        </Routes>
      </div>
  );
}

export default App;
