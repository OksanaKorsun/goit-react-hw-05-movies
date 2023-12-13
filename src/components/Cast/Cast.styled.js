import styled from 'styled-components';
import { MdNoPhotography } from 'react-icons/md';
export const WraperCast = styled.div`
  margin: 18px 40px;
`;
export const ListCast = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;
export const ItemCast = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  object-fit: cover;
  cursor: pointer;
  align-content: space-between;
  background-color: var(--main-bg-cl);
  box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
  border-radius: 0px 0px 4px 4px;
`;
export const PhotoWraper = styled(MdNoPhotography)`
  margin: 0 auto;
  margin-bottom: 188px;
  fill: #908e8c;
`;
export const InfoWraper = styled.div`
  padding: 12px;
`;
