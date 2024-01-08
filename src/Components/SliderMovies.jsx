import { Button, Carousel, Typography } from '@material-tailwind/react'
import React, { useEffect, useState } from 'react'
import MovieApi from '../api/MovieApi'
import { useNavigate } from 'react-router-dom'
const IMAGE_BASE_URL ="https://image.tmdb.org/t/p/original"
const SliderMovies = () => {
   const navigate = useNavigate()

    const [movielist,setMovieList] = useState([])

    useEffect(()=>{
        getTredingMovies()
    },[])

    const getTredingMovies=()=>{
        MovieApi.getTredingVideos.then(resp=>{
            
            setMovieList(resp.data.results)
        })
    }
    
  return (
    <>
    <div className='h-auto md:h-[30rem] py-4  p-2 sm:p-2 sm:px-16'>

    <Carousel navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )} autoplay loop  placeholder={""} className="rounded-xl">
      
       {movielist.map((item,index)=>
                
        <div   key={item.id} onClick={() => navigate(`/movie/${item.id}`)} className="relative h-full w-full hover:border border-white cursor-pointer">
        <img
           
          src={IMAGE_BASE_URL+item.backdrop_path}
          alt="image 2"
          className="h-full w-full object-cover object-top"
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
              placeholder={""}
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              {item.original_name ? item.original_name : item.title}
            </Typography>
            
          </div>
        </div>
        </div>
     )}
    </Carousel>
    </div>
    </>

     
  )
}

export default SliderMovies