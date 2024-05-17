import { createContext } from "react";
import { useState } from "react";




export const AppContext=createContext();


export default function AppContextProvider({children}){


const [state,setState]=useState({
    name:'none'
})
const [district,setDistrict]=useState({
    name:'none'
})


const value={
    state,setState,
    district,setDistrict
}
return <AppContext.Provider value={value}>
    {children}
</AppContext.Provider>
}


