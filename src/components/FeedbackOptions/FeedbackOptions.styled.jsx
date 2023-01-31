import styled from 'styled-components';
export const BoxOptions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 35px;
`;
export const Button = styled.button`
  width: 70px;
  height: 40px;
  font-size: 18px;
  cursor: pointer;
  border: none;
  background-color: #c9e6ff;
  border-radius: 4px;
  transition: scale 200ms linear;
  :hover {
    scale: 1.1;
  }
`;
