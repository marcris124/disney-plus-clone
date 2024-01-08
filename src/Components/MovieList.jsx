import React, { useEffect, useRef, useState } from 'react'
import MovieApi from '../api/MovieApi'
import MovieCard from './MovieCard'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
import HrMovieCard from './HrMovieCard';
const MovieList = ({genreId,index_}) => {

    const [movieList,setMovieList] = useState([])
    const elementRef=useRef(null);

    useEffect(()=>{
        getMovieByGenreId()
    })

    const getMovieByGenreId=()=>{
        MovieApi.getMovieByGenreId(genreId).then(resp=>{
            setMovieList(resp.data.results)
        })
    }
    const slideRight=(element)=>{
        element.scrollLeft+=500;
    }
    const slideLeft=(element)=>{
        element.scrollLeft-=500;
    }

  return (
    <div className='relative'>
    
    <IoChevronBackOutline onClick={()=>slideLeft(elementRef.current)} 
         className={`text-[50px] text-white
           p-2 z-10 cursor-pointer 
            hidden md:block absolute mt-[150px]
            ${index_%3==0?'mt-[80px]':'mt-[150px]'}`}/>
     <div ref={elementRef} className='flex overflow-x-auto gap-8 scrollbar-none scroll-smooth pt-5 px-3 pb-5'>

        {movieList.map((item,index)=>(
             <>
             { index_%3==0?<HrMovieCard  movie={item}/>:<MovieCard movie={item} key={item.id} />}
              </> 
        ))}

    </div>
    <IoChevronForwardOutline onClick={()=>slideRight(elementRef.current)}
           className={`text-[50px] text-white hidden md:block
           p-2 cursor-pointer z-10 top-0
            absolute right-0 mt-[150px]
            ${index_%3==0?'mt-[80px]':'mt-[150px]'} `}/> 

   </div>

   
  )
}

export default MovieList