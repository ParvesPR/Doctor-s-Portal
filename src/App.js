import { Route, Routes } from 'react-router-dom';
import './App.css';
import Appointment from './Appointment/Appointment';
import About from './page/About/About';
import Home from './page/Home/Home';
import Header from './page/Shared/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/appointment' element={<Appointment></Appointment>}></Route>
        <Route path='/about' element={<About></About>}></Route>
      </Routes>
    </div>
  );
}

export default App;
