import React, { useState } from "react";
import { StyledEngineProvider } from '@mui/material/styles';
import { Navbar, NavDropdown } from "react-bootstrap";
import Logo from "../assets/Traveler.png";
import { Home, Notifications } from "@mui/icons-material";
import { Avatar, Badge, IconButton } from "@mui/material";
import UserMenu from "../components/user/UserMenu";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import { useValue } from "../context/ContextProvider";

import HomeIcon from "@mui/icons-material/Home";
import TourIcon from "@mui/icons-material/Tour";
import LuggageIcon from "@mui/icons-material/Luggage";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import HotelIcon from "@mui/icons-material/Hotel";
import FeedIcon from "@mui/icons-material/Feed";
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';

import { useEffect, useRef } from "react";
import HomeC from "./Home/HomeC";
import Destinations from "./destinations/Destinations";
import News from "./News/News";
import TravelMe from "./travelMe/TravelMe";
import BookMe from "./bookMe/BookMe";
import HireMe from "./hireMe/HireMe";

import { Button, Fade, Menu, MenuItem } from "@mui/material";

import "./CustomNavbar.css";
import Content from "./Content";

const drawerWidth = 200;

function CustomNavbar(props) {
  const {
    state: { currentUser },
  } = useValue();

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const [anchorUserMenu, setAnchorUserMenu] = useState(null);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const [value, setValue] = useState(0);
  const ref = useRef();

  useEffect(() => {
    ref.current.ownerDocument.body.scrollTop = 0;
  }, [value]);

  const handleListItemClick = (index) => {
    setValue(index);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const drawer = (
    <div className="d-flex flex-column" style={{ height: "100vh" }}>
      <div className="justify-content-center p-3">
        <Navbar.Brand href="/#home">
          <img
            src={Logo}
            width="150px"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>

        <List>
          <Divider className="green-divider" />

          <ListItemButton onClick={() => handleListItemClick(0)} className="custom-button">
            <ListItemIcon className="green-icon">
              {/*icon */}
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" className="green-text" />
          </ListItemButton>

          <ListItemButton onClick={() => handleListItemClick(1)}>
            <ListItemIcon className="green-icon">
              {/*icon */}
              <TourIcon />
            </ListItemIcon>
            <ListItemText primary="Destinations" className="green-text" />
          </ListItemButton>

          <ListItemButton onClick={() => handleListItemClick(2)}>
            <ListItemIcon className="green-icon">
              {/* icon */}
              <FeedIcon />
            </ListItemIcon>
            <ListItemText primary="News" className="green-text" />
          </ListItemButton>

          <ListItemButton
            onClick={handleClick}
            aria-controls={open ? "fade-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <ListItemIcon className="green-icon">
              {/* icon */}
              <MiscellaneousServicesIcon />
            </ListItemIcon>
            <ListItemText primary="Services" className="green-text" />
          </ListItemButton>
          <Menu
            id="fade-menu"
            MenuListProps={{
              "aria-labelledby": "fade-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
          >
            <MenuItem
              onClick={() => handleListItemClick(3)}
              sx={{
                width: "170px",
                ml: "2px",
              }}
            >
              <ListItemIcon>
                {/* Add your icon component here */}
                <LuggageIcon />
              </ListItemIcon>
              Travel me
            </MenuItem>
            <MenuItem
              onClick={() => handleListItemClick(5)}
              sx={{
                width: "170px",
                ml: "2px",
              }}
            >
              <ListItemIcon>
                {/* Add your icon component here */}
                <EmojiPeopleIcon />
              </ListItemIcon>
              Hire Me
            </MenuItem>
            <MenuItem
              onClick={()=> handleListItemClick(4)}
              sx={{
                width: "170px",
                ml: "2px",
              }}
            >
              <ListItemIcon>
                {/* Add your icon component here */}
                <HotelIcon />
              </ListItemIcon>
              Book Me
            </MenuItem>
          </Menu>

        </List>

        <Divider className="green-divider" />
      </div>
      <div className="flex-grow-1"></div>
      <Divider className="green-divider" />
      <div className="flex-column align-items-center justify-content-between">
        <ListItemButton>
          <ListItemIcon className="green-icon">
            <IconButton size="large" color="inherit">
              <Badge color="error" badgeContent={20}>
                <Notifications />
              </Badge>
            </IconButton>
          </ListItemIcon>
          <ListItemText
            primary="Notifications"
            style={{ color: "white", fontFamily: "Roboto" }}
          />
        </ListItemButton>

        <div>
          <ListItemButton>
            <ListItemIcon>
              <IconButton onClick={(e) => setAnchorUserMenu(e.currentTarget)}>
                <Avatar src={currentUser?.photoURL} alt={currentUser?.name}>
                  {currentUser?.name?.charAt(0).toUpperCase()}
                </Avatar>
              </IconButton>
            </ListItemIcon>
            <ListItemText
              primary={currentUser?.name}
              style={{ color: "white", fontFamily: "Roboto" }}
            />
          </ListItemButton>

          <UserMenu {...{ anchorUserMenu, setAnchorUserMenu }} />
        </div>
      </div>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box ref={ref}>
      {
        {
          0: <HomeC setMobileOpen={setMobileOpen} />,
          1: <Destinations setMobileOpen={setMobileOpen} />,
          2: <News setMobileOpen={setMobileOpen} />,
          3: <TravelMe setMobileOpen={setMobileOpen}  />,
          4: <BookMe setMobileOpen={setMobileOpen} setValue={setValue}/>,
          5: <HireMe setMobileOpen={setMobileOpen} />
        }[value]
      }

      <div>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />

          <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
            aria-label="mailbox folders"
          >
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Drawer
              container={container}
              variant="temporary"
              open={mobileOpen}
              onTransitionEnd={handleDrawerTransitionEnd}
              onClose={handleDrawerClose}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
              sx={{
                display: { xs: "block", sm: "none" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                  backgroundColor: "black",
                },
              }}
            >
              {drawer}
            </Drawer>
            <Drawer
              variant="permanent"
              sx={{
                display: { xs: "none", sm: "block" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                  backgroundColor: "black",
                },
              }}
              open
            >
              {drawer}
            </Drawer>
          </Box>
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              p: 3,
              width: { sm: `calc(100% - ${drawerWidth}px)` },
            }}
          ></Box>
        </Box>
      </div>
    </Box>
  );
}

CustomNavbar.propTypes = {
  window: PropTypes.func,
};

export default CustomNavbar;
