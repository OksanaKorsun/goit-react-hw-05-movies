import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'services/api';
import { Loader } from 'components/Loader/Loader';
export const Reviews = () => {
  const params = useParams();
  console.log(params);
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
        <div>
          {reviews.map(({ author, content, id }) => (
            <ul>
              <li key={id}>
                <h3>Author: {author}</h3>
                <p>{content}</p>
              </li>
            </ul>
          ))}
        </div>
      )}
    </div>
  );
};