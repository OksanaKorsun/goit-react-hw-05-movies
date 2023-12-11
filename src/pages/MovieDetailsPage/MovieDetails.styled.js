import styled from "styled-components";
import { NavLink } from 'react-router-dom';
export const Link = styled(NavLink)`
  color: #1E10E4 ;
  
  font-weight: 500;
  &.active {
    color: #f81530;
  }
`;
export const List = styled.ul`
 padding-left: 40px;`