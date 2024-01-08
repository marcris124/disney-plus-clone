import React, { useEffect, useState } from 'react'
import ComplexNavbar from '../Components/NavBar'
import axios from 'axios';

import { Typography } from '@material-tailwind/react';
import MovieCard from '../Components/MovieCard';
const IMAGE_BASE_URL ="https://image.tmdb.org/t/p/original"
const SearchInput = () => {
  const [movies, setMovies] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [query, setQuery] = useState('');
  useEffect(() => {
    if (query.trim() === '') {
      // Si la consulta está vacía, mostrar todas las películas populares
      const apiKey = '37307d6a24e64eb3c5a064e34262795b';
      const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;

      axios.get(url)
        .then(response => {
          setMovies(response.data.results);
        })
        .catch(error => {
          console.error('Error al obtener películas populares:', error);
        });
    } else {
      // Si hay una consulta, realizar la búsqueda de películas en tiempo real
      const apiKey = '37307d6a24e64eb3c5a064e34262795b';
      const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&page=1&query=${query}`;

      axios.get(searchUrl)
        .then(response => {
          setSearchResults(response.data.results);
        })
        .catch(error => {
          console.error('Error al realizar la búsqueda:', error);
        });
    }
  }, [query]);
  return (
   
    
    <div className='bg-app-gray-5 '>
      <ComplexNavbar />
      <div className=' border-purple-800'>
        <div className=' border-red-900'>
        <input
        type="text"
        placeholder="Titulos, Personaje o genero"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className='w-full h-[85px] lg:h-[100px] text-xl lg:text-[44px] font-sans rounded-none bg-gray-800 border-none p-8 focus-visible:border-none'
      />
        </div>
        <Typography
              placeholder={""}             
                  color="white"
                  className="mb-4 text-2xl lg:text-2xl pt-8 pl-8" >
                  EXPLORAR
        </Typography>
        <div className=' border-orange-900'>
        {query.trim() !== '' && (
        <div className='flex flex-wrap justify-evenly items-center gap-3 p-4 transition-opacity duration-500 ease-linear'>
        {searchResults.map(movie => (
         movie.poster_path && ( 
          <MovieCard movie={movie}  key={movie.id}/>
           )
        ))}
      </div>
           )}
        </div>
       
                {query.trim() === '' && (
      <div className=' flex flex-wrap justify-center items-center gap-3 p-4 transition-opacity duration-500 ease-linear '>
        {movies.map(movie => (
          <MovieCard movie={movie}  key={movie.id} />
        ))}
      </div>
      )}

      </div>
    </div>
    
    

    
  )
}

export default SearchInput