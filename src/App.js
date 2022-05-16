import './App.css';
import Navber from './components/Assets/Page/Sheard/Navber';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Assets/Page/Home/Home';
import About from './components/Assets/Page/About/About';
import Apointment from './components/Assets/Page/Apointment/Apointment';
import Reviews from './components/Assets/Page/Reviews/Reviews';
import ContactUs from './components/Assets/Page/ContactUs/ContactUs';
import LogIn from './components/Autintication/LogIn/LogIn';
import Registation from './components/Autintication/Registation/Registation';
import RequerAuth from './RequerAuth';

function App() {
  return (
    <div className='container'>
      <Navber></Navber>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/apointment' element={<RequerAuth>
          <Apointment></Apointment>
        </RequerAuth>}></Route>
        <Route path='/reviews' element={<RequerAuth>
          <Reviews></Reviews>
        </RequerAuth>}></Route>
        <Route path='/contactUs' element={<ContactUs></ContactUs>}></Route>
        <Route path='/login' element={<LogIn></LogIn>}></Route>
        <Route path='/registation' element={<Registation></Registation>}></Route>
        <Route path='*' element={<h1>this page says 404 error</h1>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
