import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from '../pages/home'
import Register from '../auth/Register'
import { UserAuth } from '../context/AuthContext'
import Login from '../auth/Login'
import HomeMovies from '../pages/homeMovies'
import MovieDetails from '../pages/MovieDetails'
import SearchMovie from '../pages/SearchInput'
import ProtectRoutes from './ProtectRoutes'


const MyRoutes = () => {
    const {user} = UserAuth()
    const RequireAuth = ({ children }) =>{
        return user?children: <Navigate to={"/"}/>
      }
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/home-movies' element={ <RequireAuth>
                <HomeMovies/>
            </RequireAuth> }/>  
            <Route path='/' element={ <Home/> }/>    
            <Route path='/register' element={ <Register/> }/>
            <Route path='/login' element={ <Login/> }/>
            <Route path='/movie/:id' element={ <ProtectRoutes>
                <MovieDetails/>
            </ProtectRoutes> }/> 
            <Route path='/search-movie' element={ <ProtectRoutes>
                <SearchMovie/>
            </ProtectRoutes> }/> 
        </Routes>
    </BrowserRouter>
  )
}

export default MyRoutes

