import { StyledLink, AuthNavTitle, AuthNavWrapper } from './AuthNav.styled';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Fingerprint from '@mui/icons-material/Fingerprint';
export const AuthNav = () => {
  return (
    <AuthNavWrapper>
       <AuthNavTitle>Phonebook</AuthNavTitle>
      <Stack spacing={5} direction="row">
        <Button
        
          type="button"
          variant="outlined"
          size="medium"
          endIcon={  <Fingerprint aria-label="fingerprint" color="secondary"/>}
        >
          <StyledLink to="/register">Register</StyledLink>
        </Button>
        <Button
      
          type="button"
          variant="outlined"
          size="medium"
          endIcon={  <Fingerprint aria-label="fingerprint" color="success"/>}
        >
          <StyledLink to="/login">Login</StyledLink>
        </Button>
      </Stack>
     
    </AuthNavWrapper>
  );
};
