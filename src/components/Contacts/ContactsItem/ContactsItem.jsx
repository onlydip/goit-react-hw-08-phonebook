import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';

import AddIcCallIcon from '@mui/icons-material/AddIcCall';

import {
  ListItem,
  ItemName,

  DeleteButton,
  Wrapper,
} from './ContactsItem.styled';

export function ContactsItem({ delContact, name, number }) {
  return (
    <ListItem>
      <Wrapper>
       <ItemName>
        <AddIcCallIcon sx={{ fontSize: 30, marginRight: '10px'}} />
        {name}: {number}
      </ItemName>
      
      </Wrapper>
      <DeleteButton onClick={delContact}>
        <HighlightOffOutlinedIcon sx={{ fontSize: 30, borderRadius: '50%' }} />
      </DeleteButton>
    </ListItem>
  );
}
