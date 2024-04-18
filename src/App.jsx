
import './App.css';
import {Navbar}  from "./components/Navbar";
import {Route,Routes} from  'react-router-dom'
import {Home} from './pages/Home'
import {Login} from './pages/Login'
import {Signup} from './pages/Signup'
import {Dashboard} from './pages/Dashboard'
import { useState } from 'react';
import {PrivateRoute} from './components/PrivateRoute'
// import AboutUs from './pages/AboutUs';
// import ContactUs from './pages/ContactUs';

function App() {


  const[isLoggedIn,setisLoggedIn]=useState(false)


  return (
    <div className="w-[100vw]  bg-richblack-900 overflow-y-auto overflow-x-hidden flex flex-col">
      <Navbar isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn}></Navbar>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/Login' element={<Login setislogged={setisLoggedIn}></Login>}></Route>
        <Route path='/Signup' element={<Signup setislogged={setisLoggedIn}></Signup>}></Route>
        {/* <Route path='/aboutUs' element={<AboutUs ></AboutUs>}></Route>
        <Route path='/contactUs' element={<ContactUs ></ContactUs>}></Route> */}
     

        <Route path='Dashboard' element={
        
        <PrivateRoute isLoggedIn={isLoggedIn}>
        <Dashboard></Dashboard>
        </PrivateRoute>

        }></Route>
      </Routes>

    </div>
  );
}

export default App;
