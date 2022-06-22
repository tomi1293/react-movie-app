import { useEffect, useState } from 'react';
import { filterRating } from '../utils/filterRaiting';
import { get } from '../utils/httpClient';
import { MovieCard } from './MovieCard';
import styles from "./MoviesGrid.module.css";
import { Spinner } from './Spinner';

export const MoviesGrid = ({search,stars}) => {

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const searchUrl = search 
      ? `/search/movie?query=${search}`
      : `/discover/movie`; 
    get(searchUrl)
      .then((data) => {
        setIsLoading(false)
        const arrayFilter = filterRating(data.results,stars);
        setMovies(arrayFilter);
        // console.log(data)
      })

  },[search,stars])
  
  if(isLoading){
    return <Spinner/>
  }

  return (

    <ul className={`${styles.moviesGrid} animate__animated animate__fadeIn `}>
        {
          movies.sort((a,b) => b.popularity - a.popularity).map( movie => (
            <MovieCard key={movie.id} movie={movie}/>))
        }
    </ul>
 
  )
}
