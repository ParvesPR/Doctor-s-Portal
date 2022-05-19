import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './page/About/About';
import Appointment from './page/Appointment/Appointment';
import AddDoctor from './page/DashBoard/AddDoctor';
import AllUsers from './page/DashBoard/AllUsers';
import DashBoard from './page/DashBoard/DashBoard';
import MyAppointments from './page/DashBoard/MyAppointments';
import MyReview from './page/DashBoard/MyReview';
import Home from './page/Home/Home';
import Login from './page/Login/Login';
import RequireAdmin from './page/Login/RequireAdmin';
import RequireAuth from './page/Login/RequireAuth';
import SignUp from './page/Login/SignUp';
import Header from './page/Shared/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/appointment' element={
          <RequireAuth>
            <Appointment></Appointment>
          </RequireAuth>
        }></Route>
        <Route path='/dashboard' element={
          <RequireAuth>
            <DashBoard></DashBoard>
          </RequireAuth>
        }>
          <Route index element={<MyAppointments></MyAppointments>}></Route>
          <Route path='review' element={<MyReview></MyReview>}></Route>
          <Route path='allusers' element={
            <RequireAdmin>
              <AllUsers></AllUsers>
            </RequireAdmin>
          }></Route>
          <Route path='addDoctor' element={
            <RequireAdmin>
              <AddDoctor></AddDoctor>
            </RequireAdmin>
          }></Route>
        </Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/about' element={<About></About>}></Route>
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
