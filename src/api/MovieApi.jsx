import axios from "axios"

const movieBaseUrl = "https://api.themoviedb.org/3"
const api_key = "37307d6a24e64eb3c5a064e34262795b"

const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=37307d6a24e64eb3c5a064e34262795b';

const getTredingVideos = axios.get(`${movieBaseUrl}/trending/all/day?api_key=${api_key}`);
const getMovieByGenreId=(id)=>axios.get(movieByGenreBaseURL+"&with_genres="+id)

const getVideos = axios.get(`https://api.themoviedb.org/3/movie/157336/videos?api_key=37307d6a24e64eb3c5a064e34262795b`);

export default{
    getTredingVideos,
    getMovieByGenreId,
    getVideos
}