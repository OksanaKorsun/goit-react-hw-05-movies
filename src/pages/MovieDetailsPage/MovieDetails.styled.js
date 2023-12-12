import styled from "styled-components";
import { Link } from 'react-router-dom';
export const LinkStyled = styled(Link)`
  color: #1E10E4 ;
  
  font-weight: 500;
  &.active {
    color: #f81530;
  }
`;
export const List = styled.ul`
 padding-left: 40px;`