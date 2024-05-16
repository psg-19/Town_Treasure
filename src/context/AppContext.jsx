import { createContext } from "react";
import { useState } from "react";




export const AppContext=createContext();


export default function AppContextProvider({children}){


const [state,setState]=useState({
    name:'none'
})

const backendUrl="http://localhost:4001"
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


