import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMoviesCast } from '../Api/Api';
import css from './Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchDataCast = async () => {
      try {
        const cast = await getMoviesCast(movieId);
        console.log(cast);
        setCast(cast);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDataCast();
  });

  return (
    <ul className={css.list}>
      {cast.map(({ id, name, character, profile_path }) => {
        return (
          <li key={id}>
            <img
              className={css.img}
              src={'https://image.tmdb.org/t/p/w500' + profile_path}
              alt={name}
            />
            <h2>{name}</h2>
            <p>Character: {character}</p>
          </li>
        );
      })}
    </ul>
  );
};
export default Cast;
