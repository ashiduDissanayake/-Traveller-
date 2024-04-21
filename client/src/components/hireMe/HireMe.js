import React from "react";
import { useState, useEffect} from "react";

import AddRoom from "../addRoom/AddRoom";

import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { IconButton } from "@mui/material";
import { useValue } from "../../context/ContextProvider";

import "./HireMe.css";

const HomeC = ({ setMobileOpen }) => {


  const [haveRoom, setHaveRoom] = useState(false);

  const buttonClicked = () => {
    setHaveRoom(!haveRoom);
  };

  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 600);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 600);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup function to remove the event listener when component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const drawerWidth = 200;

  const {
    state: { mobileOpen },
  } = useValue();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
<div className="app-container">
      {!haveRoom ? (
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
            Welcome to Traveller
          </Typography>
          
          <button
          onClick={buttonClicked}
          >Do you have a room?</button>
        </Toolbar>
      </AppBar>

      <div className="content-container">
 
        {isLargeScreen && <div className="drawer-spacer"></div>}
        <main className="content">
          <Toolbar />
          <div
            style={{
              color: "black",
            }}
          >
            {/* Your home content is going here*/}
            <h1>------------404 Not Found -------------------</h1>
          </div>
        </main>
      </div>
        </>
       
      ):(
        <div className="content-container">
        {isLargeScreen && <div className="drawer-spacer"></div>}
        <main className="content">
          <Toolbar />
          <AddRoom />
        </main>
      </div>

      )}
      

      </div>
  );
};

export default HomeC;
