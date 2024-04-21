import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Carousel } from "react-bootstrap";
import image1 from "./image1.png";
import image2 from "./image1.png";
import image3 from "./image1.png";
import imageA1 from "./ImageA1.jpg";
import imageA2 from "./ImageA2.jpg";
import imageA3 from "./ImageA3.jpg";

const steps = [
  {
    label: "Plan with Traveller.ai",
    description: `With a single click, you are able to find the best trip that suits your needs powered by AI technology. Get personalized recommendations, itinerary planning, and travel insights.`,
    image: imageA1,
  },
  {
    label: "Book with Book Me",
    description: (
      <Typography>
        Now in a single click, you can buy your tickets for:
        <br />
        1) Exclusive Events
        <br />
        2) Accommodation
        <br />
        3) Tickets for Places (e.g., Museums).
        <br />
        Book Me offers a seamless booking experience with a wide range of
        options to choose from.
      </Typography>
    ),
    image: imageA2,
  },
  {
    label: "Hire with Hire Me",
    description: `If you need a guide or a vehicle, then Hire Me is the best solution. Whether you need a local expert to show you around or transportation for your journey, Hire Me provides reliable services tailored to your needs.`,
    image: imageA3,
  },
];

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prevActiveStep) =>
        prevActiveStep === steps.length - 1 ? 0 : prevActiveStep + 1
      );
    }, 10000); // Change the interval duration as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box
        sx={{
          display: "flex",
          maxWidth: 800,
        }}
      >
        <Box
          sx={{
            bgcolor: "#E0F2F1",
            borderRadius: "10px",
            padding: "20px",
            marginRight: "20px",
          }}
        >
          <Stepper
            activeStep={activeStep}
            orientation="vertical"
            sx={{
              color: "green",
              fontWeight: "bold",
              fontFamily: "Arial",
              fontSize: "15px",
              backgroundColor: "#E0F2F1",
            }}
          >
            {steps.map((step, index) => (
              <Step key={step.label}>
                <StepLabel
                  onClick={() => setActiveStep(index)}
                  sx={{ color: "green" }}
                >
                  {step.label}
                </StepLabel>
                <StepContent>
                  <Box sx={{ display: "flex" }}>
                    <Box sx={{ flex: 1 }}>
                      {step.description}
                      <Box sx={{ mb: 2 }}>
                        <div>
                          <Button
                            variant="contained"
                            onClick={handleNext}
                            sx={{ mt: 1, mr: 1 }}
                            color="success"
                          >
                            Continue
                          </Button>
                          <Button
                            disabled={index === 0}
                            onClick={handleBack}
                            sx={{ mt: 1, mr: 1 }}
                            color="success"
                          >
                            Back
                          </Button>
                        </div>
                      </Box>
                    </Box>
                    <Box>
                      <img
                        src={step.image}
                        alt="Plan with Traveller.ai"
                        width="250px"
                        style={{ borderRadius: "10px" }}
                      />
                    </Box>
                  </Box>
                </StepContent>
              </Step>
            ))}
          </Stepper>
        </Box>
      </Box>
    </Box>
  );
}
