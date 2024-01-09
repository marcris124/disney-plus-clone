import React from 'react'
import { UserAuth } from '../context/AuthContext'
import { Navigate } from 'react-router-dom'

const ProtectRoutes = ({children}) => {
    const {user} = UserAuth()

    if(user == null){
        return <Navigate to={"/"}/>
    }
    return children
}

export default ProtectRoutes