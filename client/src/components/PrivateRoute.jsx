import React from 'react'
import { Navigate } from 'react-router-dom'
export const PrivateRoute = ({isLoggedIn,children}) => {

// const navigate=useNavigate()


  if(isLoggedIn){
    return children
  }

  else{
return <Navigate to='/Login'/>
  }

} 

export default PrivateRoute
