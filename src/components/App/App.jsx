import { Route, Routes } from 'react-router-dom';
import { Home } from '../Home/Home';
import Navigation from '../Navigation/Navigation';
import { lazy, Suspense } from 'react';
import css from './App.module.css';
import { Rings } from 'react-loader-spinner';

const HomePage = lazy(() => import('../Home/Home'));
const MoviesHomePage = lazy(() => import('../Movies/Movies'));
const MovieDetailsPage = lazy(() => import('../MovieDetails/MovieDetails'));
const CastPage = lazy(() => import('../Cast/Cast'));
const ReviewsPage = lazy(() => import('../Reviews/Reviews'));

export const App = () => {
  return (
    <div className={css.container}>
      <header className={css.header}>
        <Navigation />
      </header>
      <Suspense
        fallback={
          <Rings
            height="180"
            width="180"
            color="orangered"
            radius="6"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="rings-loading"
          />
        }
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesHomePage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<CastPage />} />
            <Route path="reviews" element={<ReviewsPage />} />
          </Route>
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Suspense>
    </div>
  );
};
