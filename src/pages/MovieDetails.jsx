import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import MovieApi from '../api/MovieApi'
import { Typography } from '@material-tailwind/react'
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5'
import ComplexNavbar from '../Components/NavBar'
const IMAGE_BASE_URL ="https://image.tmdb.org/t/p/original"
const MovieDetails = () => {
  const elementRef=useRef(null);
    const { id } = useParams()
    const [videos,setVideos] = useState([])
    const [pelicula, setPelicula] = useState([]);
    useEffect(() => {
        const apiKey = '37307d6a24e64eb3c5a064e34262795b'; // Reemplaza con tu clave de API
        const imagenUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`;
        const videosUrl = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}&language=en-US`;
        axios.get(imagenUrl)
        .then(response => {
          setPelicula(response.data);
        })
        .catch(error => {
          console.error('Error al obtener detalles de la película:', error);
        });
  
      // Obtener videos asociados a la película
      axios.get(videosUrl)
        .then(response => {
          setVideos(response.data.results.slice(0, 10));
        })
        .catch(error => {
          console.error('Error al obtener videos de la película:', error);
        })

      }, [id]);

      const slideRight=(element)=>{
        element.scrollLeft+=500;
    }
    const slideLeft=(element)=>{
        element.scrollLeft-=500;
    }
    const imageUrl = pelicula.backdrop_path
    ? `${IMAGE_BASE_URL}${pelicula.backdrop_path}`
    : `${IMAGE_BASE_URL}${pelicula.poster_path}`;

  

  return (
    <>
    
    
    

    <div style={{ backgroundImage: `url(${imageUrl })` }} 
        className={` h-auto lg:h-screen bg-cover bg-no-repeat bg-botom`} >
        

          <ComplexNavbar/>
        
        <div className={` h-auto lg:h-screen bg-cover bg-no-repeat bg-center grid justify-start items-center  border-black  `}>
        <article  className=' border-green-800 p-8 h-auto lg:h-screen w-[100%] md:w-[50rem] bg-[#000000cf] grid content-center '>
        <div className=' border-purple-800 py-4 block md:hidden'>

            <img src={imageUrl} alt="" className='w-full border-2 border-gray-300 rounded-2xl ' />


        </div>


            <div className=' border-purple-800'>
             <Typography
              
                  variant="h1"
                  color="white"
                  className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                >
                  {pelicula.original_title }
                </Typography>
               
            </div>
            <div className=' border-purple-800'>
              <Typography
                                                            
                 color="white"
                 className="mb-4 text-3xl md:text-4xl lg:text-2xl"
                            >
                 {pelicula.release_date}
              </Typography>

            </div>

            <div className=' border-purple-800  '>
              <Typography
                                                            
                 color="white"
                 className="mb-4 text-3xl md:text-4xl lg:text-lg " 
                            >
                 {pelicula.genres && pelicula.genres.map(genero =>(
                  <span className='border-l-2 pr-3 p-2'  key={genero.id}> {genero.name + " "}  </span>
                 ))}
              </Typography>

            </div>

            <div className=' border-purple-800'>
            <Typography
                                                            
                 color="white"
                 className="mb-4 text-base md:text-lg lg:text-base " 
                            >
                 {pelicula.overview}
              </Typography>

            </div>
            <Typography
                                                            
                 color="white"
                 className="mb-4 text-3xl md:text-4xl lg:text-4xl hidden lg:flex" 
                            >
                 production companies
              </Typography>
            <div className=' border-purple-800  flex-wrap justify-center items-center bg-[#ffffffcc] rounded-2xl gap-3 hidden lg:flex  '  >
                  
            {pelicula.production_companies && pelicula.production_companies.map(companies => (
  
              companies.logo_path && (
                    <img
                      key={companies.id} 
                     src={IMAGE_BASE_URL + companies.logo_path}
                     className='w-[100px] md:w-[150px] rounded-lg hover:border-[3px] border-gray-400 cursor-pointer p-3'
                     alt={companies.name}  
                    />
               )
              ))}

            </div>
        </article>
          
        </div>
        
       
    </div>
    
    <div className='relative bg-app-gray-5'>
    <Typography
                                                  
       color="white"
       className="mb-4 text-3xl md:text-4xl lg:text-4xl pl-10 pt-8">
       Extras
     </Typography>
    <IoChevronBackOutline onClick={()=>slideLeft(elementRef.current)} 
         className={`text-[50px] text-white
           p-2 z-10 cursor-pointer 
            hidden md:block absolute mt-[150px]
            'mt-[150px]`}/>
     <div ref={elementRef} className='flex overflow-x-auto gap-8 scrollbar-none scroll-smooth pt-5 px-3 pb-5 border-t' >

     {videos.length > 0 && (
        
          
          <>
            {videos.map(video => (
              <li key={video.key}>
                <iframe
                  title={video.name}
                  className='w-[20rem] lg:w-[560px]  h-[15rem] lg:h-[315px] rounded-2xl hover:border-2 border-white'
                  src={`https://www.youtube.com/embed/${video.key}`}
                  
                  allowFullScreen
                ></iframe>
              </li>
            ))}
          
        </>
      )}

    </div>
    <IoChevronForwardOutline onClick={()=>slideRight(elementRef.current)}
           className={`text-[50px] text-white hidden md:block
           p-2 cursor-pointer z-10 top-0
            absolute right-0 mt-[15rem] `}/> 

   </div>
    </>
  )
}

export default MovieDetails