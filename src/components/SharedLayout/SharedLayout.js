import { Outlet } from 'react-router-dom';
import { Link, Header, NavList, Container } from './SharedLayout.styled';
export const SharedLayout = () => {
  return (
    <div>
      <Header>
        <nav>
          <NavList>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/movie">Movies</Link>
            </li>
          </NavList>
        </nav>
      </Header>
      <Container>
        <Outlet />
      </Container>
    </div>
  );
};
