import styles from './App.module.css';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import { MovieDetails } from './pages/MovieDetails';
import { LandingPage } from './pages/LandingPage';

export const App = () => {
  return (
    <div>
      <header className={styles.headerContainer}>
        <Link to="/">
          <h1 className={styles.title}>Movies App</h1>
        </Link>
      </header>
      <main>
        <Routes>
          <Route path="/movies/:movieId" element={<MovieDetails />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="*" element={<Navigate replace to="/"/>}/>
        </Routes>
      </main> 
    </div>
  )
}
