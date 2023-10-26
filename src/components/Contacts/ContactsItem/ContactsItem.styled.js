import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  flex-wrap: wrap;
  
  font-weight: 500;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 15px;
  
`;

export const ItemName = styled.p`
  display: flex;
  font-size: 18px;
  align-items: flex-end;
  padding-bottom: 10px;
   
`;

export const ItemNumber = styled.p`
  display: flex;
  font-size: 18px;
  align-items: flex-end;
  padding-bottom: 10px;
`;

export const DeleteButton = styled.button`
  width: 50px;
  height: 50px;
  border: none;
  padding: 0px;
  :hover,
  :focus,
  :active {
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    background-color: #812ADB;
    color: #ffffff;
    border-radius: 20%;
    cursor: pointer;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
