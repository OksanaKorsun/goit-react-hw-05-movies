import { Link } from 'react-router-dom';
import { NotFoundWraper } from './NotFound.styled';
export default function NotFound() {
    return (
    <NotFoundWraper>
      Ooooops! Error! Please use this <Link to="/">link</Link> to navigate to our
      home page
    </NotFoundWraper>
  );
}
