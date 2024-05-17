
import './App.css';
import {Navbar}  from "./components/Navbar";
import {Route,Routes} from  'react-router-dom'
import {Home} from './pages/Home'
import {Login} from './pages/Login'
import {Signup} from './pages/Signup'
import {Dashboard} from './pages/Dashboard'
import { useContext, useState } from 'react';
// import {PrivateRoute} from './components/PrivateRoute'
import { States } from './pages/States';
import { AppContext } from './context/AppContext';
import { Places } from './pages/Places';
import Booking from './pages/Booking';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Footer from './components/Footer.jsx'
function App() {


  const[isLoggedIn,setisLoggedIn]=useState(false)

const {state}=useContext(AppContext)
// console.log('appppppp',state)
  return (
    <div className="w-[100vw] no-scrollbar  bg-richblack-900 overflow-y-auto overflow-x-hidden flex flex-col">
      <Navbar isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn}></Navbar>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/Login' element={<Login setislogged={setisLoggedIn}></Login>}></Route>
        <Route path='/Signup' element={<Signup setislogged={setisLoggedIn}></Signup>}></Route>
        <Route path='/states' element={<States setislogged={setisLoggedIn}></States>}></Route>
        <Route path='/booking' element={<Booking setislogged={setisLoggedIn}></Booking>}></Route>

        <Route path={`/state`} element={<Dashboard setislogged={setisLoggedIn}></Dashboard>}></Route>
        <Route path={`/district`} element={<Places setislogged={setisLoggedIn}></Places>}></Route>
        <Route path='/aboutUs' element={<AboutUs ></AboutUs>}></Route>
        <Route path='/contactUs' element={<ContactUs ></ContactUs>}></Route> 
     

        {/* <Route path='Dashboard' element={
        
        <PrivateRoute isLoggedIn={isLoggedIn}>
        <Dashboard></Dashboard>
        </PrivateRoute>

        }></Route> */}
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
