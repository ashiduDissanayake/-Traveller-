import React from 'react'

import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import {IconButton } from "@mui/material";
import { useValue } from '../../context/ContextProvider';

const Clustermap = ({setMobileOpen}) => {
  const drawerWidth = 200;

    const {
        state: { mobileOpen }
    }= useValue();


  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
        <AppBar
    position="fixed"
    sx={{
      width: { sm: `calc(100% - ${drawerWidth}px)` },
      ml: { sm: `${drawerWidth}px` },
      backgroundColor: "green",
    }}
  >
    <Toolbar>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{ mr: 2, display: { sm: "none" } }}
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" noWrap component="div">
      <div className='center'>
        <h6>
        <a
        href='/'
        style={
        {
          color : 'white',
          'textDecoration':'none',
        }
        }
        >Traveller</a> &gt; <em>Travel-me</em></h6>
        </div>
        
        
      </Typography>
    </Toolbar>
  </AppBar>
  <Toolbar />
  <h1>------------------------404 Not Found ---------------------------------</h1>
    </>

  )
}

export default Clustermap