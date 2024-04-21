import React from "react";

import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Container, IconButton } from "@mui/material";
import { useValue } from "../../context/ContextProvider";
import UncontrolledExample from "./UncontrolledExample";
import { useState, useEffect } from "react";
import VerticalLinearStepper from "./VerticalLinearStepper";
import HorizontalScrollableImageCards from "./HorizontalScrollableImageCards";
import "./HomeC.css";
import image1 from "./image1.png";
import image2 from "./IMG2.jpg";
import image3 from "./IMG3.jpg";
import image4 from "./IMG4.jpg";
import image5 from "./IMG5.jpg";
import image6 from "./IMG6.jpg";
import image7 from "./IMG7.jpg";
import imge1 from "./imageB1.jpg";
import imge2 from "./imageB2.jpg";
import imge3 from "./imageB3.jpg";
import imge4 from "./imageB4.jpg";
import imge5 from "./imageB5.jpg";
import imge6 from "./imageB6.jpg";
import imge7 from "./imageB7.jpg";

import ComplexReviewCard from "./ReviewComponent";

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

const images1 = [
  {
    url: imge1,
    title: "Nallur Festival",
    rating: 4,
    description:
      "A mesmerizing tapestry of tradition and devotion, where the air is filled with the rhythmic beats of drums, the fragrance of flowers, and the fervent chants of worshippers, ",
  },
  {
    url: imge2,
    title: "Madhu Festival",
    rating: 5,
    description:
      "A radiant beacon of spiritual unity, transforms the tranquil forests of Sri Lanka into a vibrant sanctuary of faith, where pilgrims from diverse backgrounds converge to seek solace and blessings amidst the serene ambiance of the revered Madhu Church.",
  },
  {
    url: imge3,
    title: "Esala Perahera",
    rating: 5,
    description:
      "A majestic procession steeped in ancient mystique, weaves through the streets of Kandy, Sri Lanka, casting a spellbinding aura of tradition",
  },
  {
    url: imge4,
    title: "Arugam Bay Surfing Event",
    rating: 4,
    description:
      "Ultimate adrenaline rush and ride the waves of excitement at the upcoming surfing event, where surfers of all levels can carve their own unforgettable moments amidst the breathtaking backdrop of sun, sea, and endless adventure.",
  },
  {
    url: imge5,
    title: "Colombo Music Festival",
    rating: 5,
    description:
      "Immerse yourself in a harmonious oasis of melodies and rhythms at Colombo music festival, where every note becomes a passport to cultural discovery",
  },
  {
    url: imge6,
    title: "Lankan Premier League",
    rating: 4,
    description:
      "Experience the electrifying thrill of cricket at its finest at the Lankan Premier League",
  },
  {
    url: imge7,
    title: "Electric Mask Festival",
    rating: 4,
    description:
      "Embark on a journey of sensory enchantment, where pulsating beats, dazzling lights, and intricate masks converge to create a surreal atmosphere of mystery and excitement,",
  },
];

const Clustermap = ({ setMobileOpen }) => {
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

  const reviewData = {
    image: "https://bit.ly/3qTG5oP",
    title: "Excelent payment service. You guys are the best!",
    review:
      "Let the brain, muscles, nerves, every part of your body, be full of that idea, and just leave every other idea alone. This is the way to success.",
    author: {
      logo: "https://bit.ly/3JMIF8W",
      name: "Mathew Glock",
      role: "Marketing Manager - Spotify",
    },
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
            <em>Welcome to Traveller</em>
          </Typography>
        </Toolbar>
      </AppBar>
      <div className="content-container">
        {isLargeScreen && <div className="drawer-spacer"></div>}
        <main className="content">
          <Toolbar />
          <UncontrolledExample />
          <Toolbar />
          <div className="scroll-container flex-column align-items-center">
            <h1 className="title">Our Services</h1>
            <p className="subtitle">
              With lots of Technology we are absolutely front
            </p>
          </div>
          <VerticalLinearStepper />
          <Toolbar />
          <div className="scroll-container flex-column">
            <h1 className="title">Trending Destinations</h1>
            <p className="subtitle">
              Most popular choices for travelers from Sri Lanka
            </p>
          </div>
          <HorizontalScrollableImageCards images={images} />

          <Toolbar />
          <ComplexReviewCard {...reviewData} />
          <Toolbar />

          <div className="scroll-container flex-column">
            <h1 className="title">Trending events</h1>
            <p className="subtitle">Most popular events throughout the year</p>
          </div>
          <HorizontalScrollableImageCards images={images1} />
        </main>
      </div>
    </>
  );
};

export default Clustermap;
