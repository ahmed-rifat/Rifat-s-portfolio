import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import Navbar from './Component/Navbar/Navbar';
import About from './Component/About/About';
import 'react-toastify/dist/ReactToastify.css';
import Contact from './Component/Contact/Contact';


function App() {
  
  return (
    <div className="App">
             <Navbar></Navbar>



             <Routes>
               <Route path='/' element={<Home></Home>}></Route>
               <Route path='/home' element={<Home></Home>}></Route>
               <Route path='/about' element={<About></About>}></Route>
               <Route path='/contact' element={<Contact></Contact>}></Route>
               
             </Routes>
             
    </div>
  );
}

export default App;
