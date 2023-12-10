import { Outlet } from 'react-router-dom';
import { Link } from './SharedLayout.styled';
export const SharedLayout = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/movie">Movies</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};
