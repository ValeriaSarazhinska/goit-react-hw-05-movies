import { useEffect, useState } from 'react';
import { getMoviesById } from '../Api/Api';
import {
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import css from './MovieDetails.module.css';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  &.active {
    color: orangered;
  }
`;

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDataId = async () => {
      try {
        const film = await getMoviesById(movieId);
        setMovie(film);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDataId();
  });

  const GoBack = () => {
    navigate(location + '/');
  };
  return (
    <>
      <div className={css.container}>
        <button className={css.button} onClick={GoBack}>
          Go back &#8592;
        </button>
        <img
          className={css.img}
          src={'https://image.tmdb.org/t/p/w500' + movie.poster_path}
          alt={movie.name}
        />
        <div className={css.movieDetails}>
          <h1 className={css.title}>{movie.title}</h1>
          <ul className={css.infoList}>
            <li className={css.infoItem}>
              <p className={css.infoName}>Vote / Votes</p>
              <p className={css.infoText}>
                <span className={css.spanVotes}>{movie.vote_average}</span>
                <span className={css.spanSlash}> / </span>
                <span className={css.spanVotes}>{movie.vote_count}</span>
              </p>
            </li>

            <li className={css.infoItem}>
              <p className={css.infoName}>Popularity</p>
              <p className={css.infoText}>{movie.popularity}</p>
            </li>

            <li className={css.infoItem}>
              <p className={css.infoName}>Original Title</p>
              <p className={css.infoText}>{movie.original_title}</p>
            </li>

            <li className={css.infoItem}>
              <p className={css.infoName}>Genre</p>
              <p className={css.infoText}>
                Genres
                {movie.genres &&
                  movie.genres.map(({ name }) => {
                    return name;
                  })}
              </p>
            </li>
          </ul>
          <p className={css.infoName}>Overview</p>
          <p>{movie.overview}</p>
        </div>
      </div>
      <ul className={css.item}>
        <li>
          <StyledLink className={css.navLink} to="cast">
            Cast
          </StyledLink>
        </li>
        <li>
          <StyledLink className={css.navLink} to="reviews">
            Reviews
          </StyledLink>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default MovieDetails;
