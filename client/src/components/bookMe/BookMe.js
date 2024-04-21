import React from "react";
import { useState, useEffect } from "react";

import AddRoom from "../addRoom/AddRoom";

import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { IconButton } from "@mui/material";
import { useValue } from "../../context/ContextProvider";

import "./BookMe.css";
import ClusterMap from "./ClusterMap";

const HomeC = ({ setMobileOpen , setValue }) => {
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
                <div className="center">
                  <h6>
                    <a
                      href="/"
                      style={{
                        color: "white",
                        "textDecoration": "none",
                      }}
                    >
                      Traveller
                    </a>{" "}
                    &gt; <em>Book-me</em>
                  </h6>
                </div>
              </Typography>

              <button
                onClick={buttonClicked}
                style={{
                  padding: "10px",
                  backgroundColor: "#4CAF50", // Green background color
                  color: "white", // White text color
                  border: "none", // No border
                  borderRadius: "5px", // Rounded corners
                  position: "fixed", // Fixed position
                  top: "10px", // 20 pixels from the top
                  right: "20px", // 20 pixels from the right
                  cursor: "pointer", // Show pointer cursor on hover
                }}
              >
                Do you have a room?
              </button>
            </Toolbar>
          </AppBar>

          <div className="content-container">
            {isLargeScreen && <div className="drawer-spacer"></div>}
            <main className="content">
              <Toolbar />
              <ClusterMap />
            </main>
          </div>
        </>
      ) : (
        <div className="content-container">
          {isLargeScreen && <div className="drawer-spacer"></div>}
          <main className="content">
            <Toolbar />
            <AddRoom setPage={setValue}/>
          </main>
        </div>
      )}
    </div>
  );
};

export default HomeC;
