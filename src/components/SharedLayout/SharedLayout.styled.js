import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const Link = styled(NavLink)`
  color: black;
  text-decoration: none;
  font-weight: 500;
  &.active {
    color: #f81530;
  }
`;
export const Container = styled.main`
  /* max-width: 1440px; */
  /* margin: 0 auto; */
  /* padding: 0 16px; */
`;
export const Header = styled.header`
  border-radius: 2px;
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px,
    rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px;
  height: 70px;
`;
export const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 25px;
  font-size: 20px;
  padding-left: 40px;
  padding-top: 20px;

`;
