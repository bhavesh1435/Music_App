import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';

import AddSong from './components/AddSong';



function App() {
  return (
    <>
   
    <BrowserRouter>
      <Navbar/>
      
      
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/AddSong" element={<AddSong />} />
          
        
       
      
    </Routes>
  </BrowserRouter>
    </>
  );

}

export default App;
