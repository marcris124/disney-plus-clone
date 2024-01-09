import { useState } from 'react'
import React from 'react'
import './App.css'

import { AuthContextProvider, UserAuth } from './context/AuthContext'
import MyRoutes from './routers/router'
import ComplexNavbar from './Components/NavBar'

function App() {
 

  return (
    <>
    <AuthContextProvider>
      <ComplexNavbar/>
      <MyRoutes/>

    </AuthContextProvider>
     
    </>
  )
}

export default App
