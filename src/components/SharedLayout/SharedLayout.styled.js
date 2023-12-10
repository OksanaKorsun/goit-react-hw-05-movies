import styled from "styled-components";
import { NavLink } from "react-router-dom";
export const Link = styled(NavLink)`
  color: black;

  &.active {
    color: #F81530 ;
  }
`;