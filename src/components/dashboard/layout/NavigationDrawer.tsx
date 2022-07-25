import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { isNavigationDrawerOpened, toggleDrawer } from './NavigationSlice';
import { ExpandLess, ExpandMore, Logout, Person, SpaceBar, StarBorder } from '@mui/icons-material';
import { authenticationDetails, invalidateTokenAsync } from '../../authentication/AuthenticationSlice';
import { Collapse, ListItemButton } from '@mui/material';
import { useState } from 'react';

interface State {
  opened: {
    groups: boolean
  },
}

export default function SwipeableTemporaryDrawer() {
  const [state, setState] = useState<State>({
    opened: {
      groups: false,
    },
  });

  const dispatch = useAppDispatch();
  const isDrawerOpened = useAppSelector(isNavigationDrawerOpened);
  const details = useAppSelector(authenticationDetails);

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

  const handleLogout = async () => {
    dispatch(invalidateTokenAsync(details));
  }

  const handleClick = (name: string) => {
    setState(current => {
      const newName = name as keyof typeof state.opened;

      return {
        opened: {
          ...current.opened,
          [name]: !current.opened[newName] as boolean,
        }
      }
    })
  }

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onKeyDown={handleToggleDrawer(false)}
    >
      <ListItemButton onClick={() => handleClick('groups')}>
        <ListItemIcon>
          <Person />
        </ListItemIcon>
        <ListItemText primary="Groups" />
        {state.opened ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={state.opened.groups} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </List>
      </Collapse>
      <List>
        <ListItem
          button
          key={"Logout"}
          onClick={handleLogout}
        >
          <ListItemIcon>
            <Logout />
          </ListItemIcon>
          <ListItemText primary={"Logout"} />
        </ListItem>
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
