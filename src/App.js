import './App.css';
import { Routes, Route, useLocation } from "react-router-dom";
import LandingPage from './Components/LandingPage/LandingPage.jsx';
import Home from './Components/Home/Home.jsx';
import Navbar from './Components/Navbar/Navbar';
import FormCreatePokemon from './Components/FormCreate/FormCreatePokemon.jsx';
import DetailPokemon from './Components/Detail/DetailPokemon.jsx';
import UpdatePokemon from './Components/UpdatePokemon/UpdatePokemon';


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
          <Route path='/detail/:id' element={<DetailPokemon/>}/>
          <Route path='/update/:id' element={<UpdatePokemon/>}/>
        </Routes>
      </div>
  );
}

export default App;
