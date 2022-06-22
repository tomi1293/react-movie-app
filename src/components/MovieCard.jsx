import styles from './MovieCard.module.css';
import { Link } from 'react-router-dom';
import { getMovieImg } from '../utils/getMovieImg';

export const MovieCard = ({movie}) => {
    const imgUrl = getMovieImg(movie.poster_path,300);
    // const imgUrl = 'https://image.tmdb.org/t/p/w300' + movie.poster_path;

    return (
        <li className={styles.movieCard}>
            <Link to={`/movies/${movie.id}`}>
                <img 
                    width={230} 
                    height={345} 
                    className={styles.movieImage} 
                    src={imgUrl} 
                    alt={movie.title} 
                    />
                <div>{movie.title}</div>
                {/* <p>{movie.vote_average}</p> */}
                {/* <p>{movie.popularity}</p> */}
            </Link>
        </li>
    )
}
