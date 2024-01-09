import { Typography } from '@material-tailwind/react'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
const IMAGE_BASE_URL ="https://image.tmdb.org/t/p/original"
const MovieCard = ({movie}) => {
  const navigate = useNavigate()


  return (
    
        <img
          onClick={() => navigate(`/movie/${movie.id}`)}
          src={IMAGE_BASE_URL+movie.poster_path}
          alt="image 2"
          className="w-[150px] md:w-[200px] rounded-lg hover:border-[3px] border-gray-400 hover:scale-110 transition-all duration-150 ease-in cursor-pointer "
        />
   
  )
}

export default MovieCard