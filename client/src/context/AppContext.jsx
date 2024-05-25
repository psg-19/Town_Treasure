import { createContext } from "react";
import { useState } from "react";




export const AppContext=createContext();


export default function AppContextProvider({children}){


const [state,setState]=useState({
    name:'none'
})

const backendUrl="https://test2-1-vau5.onrender.com"
const [district,setDistrict]=useState({
    name:'none'
})

const [isLoggedIn,setisLoggedIn]=useState(false);


const value={
    state,setState,
    district,setDistrict,
    backendUrl,isLoggedIn,setisLoggedIn
}
return <AppContext.Provider value={value}>
    {children}
</AppContext.Provider>
}


