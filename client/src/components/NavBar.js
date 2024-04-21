import React, { useEffect, useState } from "react";
import "../components/NavBar.css"; // Import the CSS file for Navbar styling
import Logo from "../assets/Traveler.png";
import GButton from "./startup/GButton";
import Text from "../components/startup/Text";

const NavBar = () => {
  
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
        <div className="container">
          <div className={`navbar ${isScrolled ? "scrolled" : ""}`}>
            <a href="/">
              <img src={Logo} alt="Logo" width="150px" />
            </a>
            <GButton />
          </div>
          <Text />
        </div>
  );
};

export default NavBar;
