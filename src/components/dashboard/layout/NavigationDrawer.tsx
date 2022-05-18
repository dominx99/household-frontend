import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { isNavigationDrawerOpened, toggleDrawer } from './NavigationSlice';

export default function SwipeableTemporaryDrawer() {
  const dispatch = useAppDispatch();
  const isDrawerOpened = useAppSelector(isNavigationDrawerOpened);

  const handleToggleDrawer =
    (opened: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      dispatch(toggleDrawer(opened));
    };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={handleToggleDrawer(false)}
      onKeyDown={handleToggleDrawer(false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
        <React.Fragment key={"left"}>
          <SwipeableDrawer
            anchor={"left"}
            open={isDrawerOpened}
            onClose={handleToggleDrawer(false)}
            onOpen={handleToggleDrawer(true)}
          >
            { list() }
          </SwipeableDrawer>
        </React.Fragment>
    </div>
  );
}
