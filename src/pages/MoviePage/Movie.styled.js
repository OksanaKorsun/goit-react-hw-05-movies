import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkStyled = styled(Link)`
  color: #1e10e4;
`;
export const List = styled.ul`
  padding: 0 40px;
  font-size: 14px;
`;
export const Title = styled.h4`
  margin: 8px 0;
`;
export const FormStyled = styled.form`
  margin: 30px auto;
  text-align: center;
  padding: 20px;
`;
export const InputStyled = styled.input`
  font-size: 16px;
  border: 1px solid #1e10e4;
  width: 340px;
  outline: none;
  padding: 8px;
  border-radius: 8px;
  height: 38px;
`;
export const FormButton = styled.button`
  height: 38px;
  background-color: #1e10e4;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  outline: none;
  border-radius: 8px;
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px,
    rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background-color: #1b0ece;
  }
`;
