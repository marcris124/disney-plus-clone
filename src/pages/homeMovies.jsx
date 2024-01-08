import { Button } from '@material-tailwind/react'
import React, { useEffect } from 'react'
import { UserAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import ComplexNavbar from '../Components/NavBar'
import CarouselMovies from '../Components/SliderMovies'
import ProductionHouse from '../Components/ProductionHouse'
import GenreMovieList from '../Components/GenreMovieList'

const HomeMovies = () => {
   

  return (
    <div className='bg-app-gray-5 '>

      <ComplexNavbar/>

      <CarouselMovies/> 
       <ProductionHouse/>

        <GenreMovieList/>

    </div>
       
  )
}

export default HomeMovies