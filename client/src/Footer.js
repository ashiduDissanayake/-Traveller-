import React from "react";
import { useEffect, useState } from "react";
import "./Footer.css";
import {
  Container,
  Row,
  Col,
  Image,
  Nav,
  NavLink,
  Stack,
} from "react-bootstrap";
import image from "./assets/favicon.ico";
import { Toolbar } from "@mui/material";

const Footer = () => {
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
    <div className="app-container">
      <div className="content-container">
        {isLargeScreen && <div className="drawer-spacer"></div>}
        <main className="content">
        <div className="drawer-spacer2">

        </div>
          <footer className="footer">
            <Container fluid>
              <Row className="bg-success text-white p-4 ">
                <Col className="mx-5">
                  <Stack>
                    <Image
                      alt="company logo"
                      rounded
                      width={150}
                      height={150}
                      src={image}
                    />
                    <h2>Traveller</h2>
                    <p>
                      <em>Your Ultimate traveling partner</em>
                    </p>
                  </Stack>
                </Col>
                <Col>
                  <Nav className="flex-column fs-5">
                    Company
                    <NavLink href="#" className="text-white">
                      About Us
                    </NavLink>
                    <NavLink href="#" className="text-white">
                      FAQ's
                    </NavLink>
                    <NavLink href="#" className="text-white">
                      News
                    </NavLink>
                  </Nav>
                </Col>
                <Col>
                  <h4>Contact us!</h4>
                  <p>email@fakeemail.com</p>
                  <p>Phone: +1 (800) 867-5309</p>
                </Col>
              </Row>
            </Container>
          </footer>
        </main>
      </div>
    </div>
  );
};

export default Footer;
