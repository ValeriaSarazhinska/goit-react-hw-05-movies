import { getMovieByReviews } from '../Api/Api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchDataReviews = async () => {
      try {
        const reviews = await getMovieByReviews(movieId);
        setReviews(reviews);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDataReviews();
  });

  return (
    <ul>
      {reviews.map(({ id, author, content }) => {
        return (
          <li key={id}>
            <h2>Author: {author}</h2>
            <p>Content: {content}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Reviews;
