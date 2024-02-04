import logo from './logo.svg';
import './App.css';
import {Navbar}  from "./components/Navbar";
import {Route,Routes} from  'react-router-dom'
import {Home} from './pages/Home'
import {Login} from './pages/Login'
import {Signup} from './pages/Signup'
import {Dashboard} from './pages/Dashboard'
import { useState } from 'react';
import {PrivateRoute} from './components/PrivateRoute'

function App() {


  const[isLoggedIn,setisLoggedIn]=useState(false)


  return (
    <div className="w-[100vw] h-[100vh] bg-richblack-900 flex flex-col">
      <Navbar isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn}></Navbar>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='Login' element={<Login setislogged={setisLoggedIn}></Login>}></Route>
        <Route path='Signup' element={<Signup setislogged={setisLoggedIn}></Signup>}></Route>
     

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
