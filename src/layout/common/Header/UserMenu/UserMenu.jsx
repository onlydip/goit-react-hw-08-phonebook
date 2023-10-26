import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/authentication/operations';
import { getUsername } from 'redux/authentication/selectors';
import {
  UserMenuWrapper,
  UserLogin,
  UserMenuMainWrapper,
  UserMenuTitle,
} from './UserMenu.styled';
import Button from '@mui/material/Button';

export function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(getUsername);

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <UserMenuMainWrapper>
      <UserMenuTitle>Phonebook</UserMenuTitle>
      <UserMenuWrapper>
        <UserLogin>Hello, {name}</UserLogin>
        <Button
        
          type="button"
          variant="outlined"
          size="medium"
          onClick={handleLogOut}
         
        >
          Logout
        </Button>
      </UserMenuWrapper>
    </UserMenuMainWrapper>
  );
}
