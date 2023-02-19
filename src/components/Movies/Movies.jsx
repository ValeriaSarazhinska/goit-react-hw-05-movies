import { useEffect, useState } from 'react';
import { Searchbar } from '../Searchbar/Searchbar';
import { getMovieByQuery } from '../Api/Api';
import { useLocation, useSearchParams } from 'react-router-dom';
import { MovieList } from '../MovieList/MovieList';
import { Notify } from 'notiflix';

const Movies = () => {
  const [movies, setMovies] = useState([]);

  const location = useLocation();

  const [searchParams, setSearchParams] = useSearchParams();
  const searchRequest = searchParams.get('query');

  const handleFormSubmit = query => {
    setSearchParams({ query });
  };

  useEffect(() => {
    if (!searchRequest) return;
    const fetchName = async () => {
      try {
        const film = await getMovieByQuery(searchRequest);
        if (!film.length) {
          return Notify.failure(
            'Sorry, there are no images matching your search query. Please try again.'
          );
        }
        setMovies(film);
      } catch (error) {
        console.log(error);
      }
    };
    fetchName();
  }, [searchRequest]);
  return (
    <>
      <Searchbar onSubmit={handleFormSubmit} />
      <MovieList movies={movies} location={location} />
    </>
  );
};

export default Movies;
