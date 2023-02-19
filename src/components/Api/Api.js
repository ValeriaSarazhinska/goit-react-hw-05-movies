import axios from 'axios';

const key = 'b5c9f17b4578fb7f9b4d9d1272c464ac';
const URL = `https://api.themoviedb.org/3`;

export const getPopularMovies = async () => {
  try {
    const response = await axios.get(
      `${URL}/trending/movie/day?api_key=${key}&page=${1}`
    );
    const { results } = response.data;
    const films = results.map(film => {
      const { title, id, overview } = film;
      return { title, id, overview };
    });
    return { films };
  } catch (error) {
    console.log(error);
  }
};

export const getMoviesById = async id => {
  try {
    const response = await axios.get(`${URL}/movie/${id}?api_key=${key}`);
    const {
      poster_path,
      title,
      release_date,
      overview,
      genres,
      vote_average,
      vote_count,
      popularity,
      original_title,
    } = response.data;
    return {
      poster_path,
      title,
      release_date,
      overview,
      genres,
      vote_average,
      vote_count,
      popularity,
      original_title,
    };
  } catch (error) {
    console.log(error);
  }
};

export const getMoviesCast = async id => {
  try {
    const { data } = await axios.get(
      `${URL}/movie/${id}/credits?api_key=${key}`
    );

    return data.cast.map(({ id, name, character, profile_path }) => ({
      id,
      name,
      character,
      profile_path,
    }));
  } catch (error) {
    console.log(error);
  }
};

export const getMovieByQuery = async query => {
  try {
    const { data } = await axios.get(
      `${URL}/search/movie?api_key=${key}&query=${query}`
    );
    return data.results.map(({ id, title }) => ({ id, title }));
  } catch (error) {
    console.log(error);
  }
};

export const getMovieByReviews = async id => {
  try {
    const { data } = await axios.get(
      `${URL}/movie/${id}/reviews?api_key=${key}`
    );
    return data.results.map(({ id, author, content }) => ({
      id,
      author,
      content,
    }));
  } catch (error) {
    console.log(error);
  }
};
