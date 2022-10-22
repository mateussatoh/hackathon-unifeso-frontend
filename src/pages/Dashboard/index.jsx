import React, { useState } from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';


import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { DashboardAlunoView } from "../../views/Dashboard/Aluno"
import { DashboardAdminView } from "../../views/Dashboard/Admin"
import { DashboardProfessorView } from "../../views/Dashboard/Professor"




import LogoutIcon from '@mui/icons-material/Logout';

import PersonIcon from '@mui/icons-material/Person';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { Sidebar } from "../../components/Sidebar"


const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

const mdTheme = createTheme();

function Dashboard({view}) {
  const [open, setOpen] = useState(true);
  const [userDrawerOptions, setUserDrawerOptions] = useState(false)

  const toggleDrawer = () => {
    setOpen(!open);
  };

  function renderView(view) {
    switch(view) {
      case "ADMIN":
        return <DashboardAdminView />
        break;
      case "ALUNO":
        return <DashboardAlunoView />
        break;
      case "PROFESSOR":
        return <DashboardProfessorView />
        break;
      default:
    }
  }

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: '24px', 
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
             {view === "ADMIN" ? "Área do coordenador" : view === "ALUNO" ? "Área do aluno" : "Área do professor" }
            </Typography>
            <IconButton color="inherit" onClick={(e) => {setUserDrawerOptions(e.currentTarget)}}>
                <PersonIcon />
                <KeyboardArrowDownIcon />
            </IconButton>        
          </Toolbar>
        </AppBar>



        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <Sidebar />
        </Drawer>

        {renderView(view)}

        <Menu
        id="basic-menu"
        anchorEl={userDrawerOptions}
        open={userDrawerOptions}
        onClose={ () => setUserDrawerOptions(false)}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={() => setUserDrawerOptions(false)}>
        <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText>Logout</ListItemText>
          </MenuItem>
      </Menu>

    </Box>


      
    </ThemeProvider>
  );
}

export {Dashboard}