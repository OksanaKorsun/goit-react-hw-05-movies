import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const LinkStyled = styled(Link)`
  color: #1e10e4;

  font-weight: 500;
  &.active {
    color: #f81530;
  }
`;
export const List = styled.ul`
  padding-left: 40px;
  margin-bottom: 16px;
`;
export const Wraper = styled.div`
  border-top: 2px solid rgba(0, 0, 0, 0.2);
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
`;
export const BackWraper = styled.div`
display: flex;
align-items: center;
`