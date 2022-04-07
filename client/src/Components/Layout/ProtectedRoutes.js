import React, {useContext}from 'react'
import {Navigate, Outlet} from 'react-router-dom'
import { ApplicationContext } from '../Context/ApplicationContext'


function ProtectedRoutes() {

    const {isLoggedIn} = useContext(ApplicationContext)

  return isLoggedIn ? <Outlet/> : <Navigate to="/" />
  
}

export default ProtectedRoutes