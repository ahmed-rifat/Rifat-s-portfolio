import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import Navbar from './Component/Navbar/Navbar';
import About from './Component/About/About';
import Login from './Component/Login/Login';

function App() {
  return (
    <div className="App">
             <Navbar></Navbar>



             <Routes>
               <Route path='/' element={<Home></Home>}></Route>
               <Route path='/about' element={<About></About>}></Route>
               <Route path='/login' element={<Login></Login>}></Route>
             </Routes>
    </div>
  );
}

export default App;
