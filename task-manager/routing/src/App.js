
// https://storage.googleapis.com/accio-digital-ocean-data/media/frontend4_mock/frontend4_mock_routing.gif
import './App.css';
import {Routes,Route} from "react-router-dom"
import Navbar from './components/navbar'; 
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
function App() {
  return (
    <div className="App">
      <Navbar/>
       <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
      
       </Routes>
 
    </div>
    
  );
}

export default App;
