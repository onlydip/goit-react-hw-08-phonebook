import styled from 'styled-components';

export const UserMenuMainWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const UserMenuTitle = styled.p`
  text-transform: uppercase;
  color: blue; 
  font-size: 32px; 
  font-weight: 700;
  letter-spacing: 8px; 
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

export const UserMenuWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const UserLogin = styled.p`
  font-size: 18px;
  text-decoration: none;
  color: white;
  cursor: pointer;
  font-weight: 500;
  margin-right: 30px;
  &:last-child {
    margin-right: 0px;
  }
  &:hover {
    color: #812ADB;
    font-weight: 500;
  }
`;
