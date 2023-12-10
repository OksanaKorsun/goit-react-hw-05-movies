import styled from "styled-components";
import { NavLink } from 'react-router-dom';
export const Link = styled(NavLink)`
  color: black;
  text-decoration: none;
  font-weight: 500;
  &.active {
    color: #f81530;
  }
`;