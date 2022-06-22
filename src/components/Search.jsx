import styles from "./Search.module.css"
import { UilSearch } from '@iconscout/react-unicons';
import { useSearchParams } from "react-router-dom";

export const Search = () => {
    
    const [query,setQuery] = useSearchParams();
    const search = query.get("search");
    
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleInputChange = (e) => {
        const value = e.target.value;
        setQuery({search: value})
    }

    return (
        <form className={styles.searchContainer} onSubmit={handleSubmit}>
            <div className={styles.searchBox}>
                <input 
                    className={styles.searchInput} 
                    type="text" 
                    value={search ?? ""} 
                    placeholder="Title"
                    aria-label="Search Movies"
                    onChange={handleInputChange}
                />

                <UilSearch color="#000" className={styles.searchButton}/>

            </div>
        </form>
    )
}
