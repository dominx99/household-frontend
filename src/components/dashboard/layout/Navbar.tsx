import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useAppDispatch } from '../../../app/hooks';
import { toggleDrawer } from './NavigationSlice';

export default function Navbar() {
  const dispatch = useAppDispatch();

  const handleOpenNavigationDrawer = () => {
    dispatch(toggleDrawer(true));
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleOpenNavigationDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Lists
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
