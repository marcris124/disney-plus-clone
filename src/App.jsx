import { useState } from 'react'
import React from 'react'
import './App.css'

import { AuthContextProvider, UserAuth } from './context/AuthContext'
import MyRoutes from './routers/router'


function App() {
 

  return (
    <>
    <AuthContextProvider>
     
      <MyRoutes/>

    </AuthContextProvider>
     
    </>
  )
}

export default App
