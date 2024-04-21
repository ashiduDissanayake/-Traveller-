import React from "react";

import MenuIcon from "@mui/icons-material/Menu";
import {
  Container,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
} from "@mui/material";
import { useValue } from "../../context/ContextProvider";
import { useState, useEffect } from "react";
import image1 from "./image1.png";
import image2 from "./IMG2.jpg";
import image3 from "./IMG3.jpg";
import image4 from "./IMG4.jpg";
import image5 from "./IMG5.jpg";
import image6 from "./IMG6.jpg";
import image7 from "./IMG7.jpg";
import HorizontalScrollableImageCards from "../Home/HorizontalScrollableImageCards";
import "./Destinations.css";
import imageUrl from "./image.jpg";
import TitlebarImageList from "../TitleBarImageList";

const images = [
  {
    url: image1,
    title: "Sigiriya",
    rating: 4,
    description: "A fortress atop a rock adorned with ancient frescoes",
  },
  {
    url: image2,
    title: "Ella",
    rating: 5,
    description:
      "Home to caves, cascades, and secluded temples—plus the Ella Gap",
  },
  {
    url: image3,
    title: "Hikkaduwa",
    rating: 4,
    description:
      "Good waves for surfers, reefs for snorkelers and divers, plus sand-side hotels, restaurants, and bars.",
  },
  {
    url: image4,
    title: "Yala National Park",
    rating: 4,
    description: "An unforgettable safari experience for wildlife enthusiasts.",
  },
  {
    url: image5,
    title: "Polonnaruwa",
    rating: 5,
    description:
      "Once a forgotten kingdom,Polonnaruwa whispers its grandeur through ancient ruins.",
  },
  {
    url: image6,
    title: "NuwaraEliya",
    rating: 4,
    description:
      "Sri Lanka's misty heart, offers cool breezes, verdant hills, and a taste of England amidst the tropics.",
  },
  {
    url: image7,
    title: "Dunhinda Falls",
    rating: 4,
    description:
      "Shrouded in mist and surrounded by lush greenery, enticing visitors with its mesmerizing beauty and the soothing melody of its rushing waters.",
  },
];

const Destinations = ({ setMobileOpen }) => {
  const drawerWidth = 200;

  const {
    state: { mobileOpen },
  } = useValue();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
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
            <div className="center">
              <h6>
                <a
                  href="/"
                  style={{
                    color: "white",
                    textDecoration: "none",
                  }}
                >
                  Traveller
                </a>{" "}
                &gt; <em>Destinations</em>
              </h6>
            </div>
          </Typography>
        </Toolbar>
      </AppBar>

      <Container>
        <Toolbar />
        <div className="content-container">
          {isLargeScreen && <div className="drawer-spacer"></div>}
          <main className="content">
            <div className="scroll-container flex-column">
              <h1 className="title">
                Trending Destinations around the Sri Lanka
              </h1>
            </div>
            <div className="image-container">
              <img src={imageUrl} alt="Wallpaper" className="wallpaper" />
              <button className="map-button">View in Map</button>
            </div>

            <HorizontalScrollableImageCards images={images} />

            <Toolbar />

            <TitlebarImageList />
          </main>
        </div>
      </Container>
    </>
  );
};

export default Destinations;
