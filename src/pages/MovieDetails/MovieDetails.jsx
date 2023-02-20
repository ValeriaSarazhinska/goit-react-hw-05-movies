import { useEffect, useState } from 'react';
import { getMoviesById } from '../../Api/Api';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import css from './MovieDetails.module.css';
import styled from 'styled-components';
import Loader from '../../components/Loader/Loader';

const StyledLink = styled(NavLink)`
  &.active {
    color: orangered;
  }
`;

const MovieDetails = () => {
  const { movieId } = useParams();
  console.log(movieId);
  const [movie, setMovie] = useState({});
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchDataId = async () => {
      try {
        const film = await getMoviesById(movieId);
        setMovie(film);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchDataId();
  }, []);

  const backLinkHref = location.state?.from ?? '/';

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <Link className={css.button} to={backLinkHref}>
            &#8592; Go back
          </Link>
          <div className={css.container}>
            <img className={css.img} src={movie.poster_path} alt={movie.name} />
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
                    {movie.genres &&
                      movie.genres
                        .map(({ name }) => {
                          return name;
                        })
                        .join(' ')}
                  </p>
                </li>
              </ul>
              <p className={css.infoName}>Overview</p>
              <p>{movie.overview}</p>
            </div>
          </div>
          <ul className={css.item}>
            <li>
              <StyledLink
                className={css.navLink}
                to="cast"
                state={{ from: backLinkHref }}
              >
                Cast
              </StyledLink>
            </li>
            <li>
              <StyledLink
                className={css.navLink}
                to="reviews"
                state={{ from: backLinkHref }}
              >
                Reviews
              </StyledLink>
            </li>
          </ul>
          <Outlet />
        </div>
      )}
    </>
  );
};

export default MovieDetails;
