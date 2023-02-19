import { useEffect, useState } from 'react';
import { getPopularMovies } from '../Api/Api';
import { useLocation } from 'react-router-dom';
import { MovieList } from '../MovieList/MovieList';
import css from './Home.module.css';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { films } = await getPopularMovies();
        setMovies(films);
      } catch (error) {
        console.log(error);
      } finally {
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <h1 className={css.title}>Trending today</h1>
      <MovieList movies={movies} location={location} />
    </>
  );
};
export default Home;
