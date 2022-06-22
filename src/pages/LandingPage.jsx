import { Rating } from '@mui/material';
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { MoviesGrid } from '../components/MoviesGrid';
import { Search } from '../components/Search';
import { useDebounce } from '../hooks/useDebounce';
import styles from './LandingPage.module.css';

export const LandingPage = () => {

  const [query] = useSearchParams();
  const search = query.get("search");
  const debouncedSearch = useDebounce(search, 300);
  const [starValue, setStarValue] = useState(null)
  // console.log(starValue);
  const handleChange = (e,newValue) => {
    setStarValue(newValue);
  }
  return (
    <div>
      <div className={styles.searchContainer}>
          <Search/>
          <div className={styles.stars}>
           <Rating 
              name="simple-controlled" 
              value={starValue}
              onChange={handleChange}
              defaultValue={5} 
              size="large" 
            />
          </div>
      </div>
      <MoviesGrid search={debouncedSearch} stars={starValue} />
    </div>
  )
}
