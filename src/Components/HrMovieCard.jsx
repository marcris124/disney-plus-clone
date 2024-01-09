import { Typography } from '@material-tailwind/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
const IMAGE_BASE_URL ="https://image.tmdb.org/t/p/original"
const HrMovieCard = ({movie}) => {
  const navigate = useNavigate()
  return (
    <>
    
    <section key={movie.id} className=' bg-[#161616] rounded-lg hover:scale-110 transition-all duration-150 ease-in hover:border-[3px] border-gray-400 cursor-pointer'>
    <img src={IMAGE_BASE_URL+movie.backdrop_path} 
    onClick={() => navigate(`/movie/${movie.id}`)}
    className='w-[210px] md:w-[370px] rounded-tl-lg rounded-tr-lg
    
    '/>

      <div className=''> 
    <Typography                                                      
      color="white"
      className="w-[210px] md:w-[360px] mt-2 text-left mb-4 text-sm md:text-4xl lg:text-xl p-3" >
      {movie.title}
   </Typography>
    </div>
    </section>
    </>

    
  )
}

export default HrMovieCard