import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  padding: 6px 26px;
`;

export const AuthNavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const AuthNavTitle = styled.p`
  text-transform: uppercase;
  color: blue; 
  font-size: 32px; 
  font-weight: 700;
  letter-spacing: 8px; 
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3); 
`;
