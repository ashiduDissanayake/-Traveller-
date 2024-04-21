import React from "react";
import "./Text.css"; // Import CSS file for styling
//import thw video from the assets folder
import Video from "../../assets/video.mp4";

const Text = () => {
  return (
    <div className="text-container">
      <h1 className="hel">Endless destinations, adventures,</h1>
      <h1 className="hel"> and more</h1>
      <h4 className="ooo">Explore everywhere. Book anytime.</h4>

      <div>
        <video autoPlay muted loop id="background-video">
          <source src={Video} type="video/mp4" />
        </video>
      </div>
      <div>
        
        
      </div>
    </div>
  );
};

export default Text;
