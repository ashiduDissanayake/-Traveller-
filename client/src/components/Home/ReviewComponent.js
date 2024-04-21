import React from "react";
import "./ComplexReviewCard.css"; // Import CSS file for styling
import video1 from "./video.mp4"; // Import video file

const ComplexReviewCard = ({ video, image, title, review, author }) => {
  return (
    <div className="complex-review-card">
      <video autoPlay loop muted className="background-video" src={video1} type="video/mp4" />

      <div className="card-header">
        <img src={image} alt="User" className="user-photo" />
        <div className="card-body">
          <div className="author-details">
            <img src={author.logo} alt="Author" className="author-logo" />
            <div className="author-info">
              <div className="author-name">{author.name}</div>
              <div className="author-role">{author.role}</div>
            </div>
          </div>
          <div className="review-title">{title}</div>
          <div className="review-text">{review}</div>
        </div>
      </div>
    </div>
  );
};

export default ComplexReviewCard;