import { useParams } from 'react-router-dom';
import styles from "./MovieDetails.module.css"
import { useEffect, useState } from "react";
import { get } from "../utils/httpClient";
import { Spinner } from "../components/Spinner";
import { Rating } from '@mui/material';
import { round } from '../utils/round';

export const MovieDetails = () => {

    const [movie, setMovie] = useState(null);
    const [isLoading, setIsLoading] = useState(true)
    const { movieId } = useParams();
    
    useEffect(() => {
        setIsLoading(true)
        get(`/movie/${movieId}`).then(data => {
            setIsLoading(false)
            setMovie(data)
            // console.log(data)
        })
    }, [movieId])
    
    if(isLoading){
        return (<Spinner/>)
    }

    if(!movie){
        return null
    }

    const imgUrl = 'https://image.tmdb.org/t/p/w500' + movie.poster_path

    return (
        <div className={styles.detailsContainer}>
            <img className={`${styles.col} ${styles.movieImage} animate__animated animate__fadeInLeft`} src={imgUrl} alt={movie.title}/>
            <div className={`${styles.col} ${styles.movieDetails}`}>
                <p className={styles.firstItem}><strong> Title:</strong> {movie.title}</p>
                <p>
                    <strong>Genres:</strong> {movie.genres.map( (genre) =>genre.name).join(", ")}
                </p>
                <p><strong>Description:</strong> {movie.overview}</p>
                {/* <p><strong>Vote Average:</strong> {movie.vote_average}</p> */}
                <Rating name="read-only" precision={0.5} value={round((movie.vote_average)/2)} readOnly />
            </div>
        </div>
    )
}
