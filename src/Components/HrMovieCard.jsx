import React from 'react'
import { useNavigate } from 'react-router-dom'
const IMAGE_BASE_URL ="https://image.tmdb.org/t/p/original"
const HrMovieCard = ({movie}) => {
  const navigate = useNavigate()
  return (
    <>
    
    <section key={movie.id} className='hover:scale-110 transition-all duration-150 ease-in'>
    <img src={IMAGE_BASE_URL+movie.backdrop_path} 
    onClick={() => navigate(`/movie/${movie.id}`)}
    className='w-[110px] md:w-[260px] rounded-lg
    hover:border-[3px] border-gray-400 cursor-pointer
    '/>
    <h2 className='w-[110px] md:w-[260px] text-white
    mt-2'>{movie.title}</h2>
    </section>
    </>

    
  )
}

export default HrMovieCard