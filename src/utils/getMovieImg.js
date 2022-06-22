import placeholder from '../images/placeholder.png';

export const getMovieImg = (path,width) => {
  return path
    ? `https://image.tmdb.org/t/p/w${width}${path}` 
    : placeholder;
}
