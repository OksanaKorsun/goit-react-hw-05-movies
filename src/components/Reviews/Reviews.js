import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'services/api';
import { Loader } from 'components/Loader/Loader';
import { Container } from './Reviews.styled';
export const Reviews = () => {
  const params = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getReviews() {
      try {
        setIsLoading(true);
        setError(false);
        const findReviews = await fetchReviews(params.movieId);
        setReviews([...findReviews.results]);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getReviews();
  }, [params.movieId]);
  return (
    <div>
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      {reviews.length > 0 && (
        <Container>
          {reviews.map(({ author, content, id }) => (
            <ul>
              <li key={id}>
                <h3>Author: {author}</h3>
                <p>{content}</p>
              </li>
            </ul>
          ))}
        </Container>
      )}
      {reviews.length === 0 && <p>We don't have any reviews for this movie.</p>}
    </div>
  );
};
