import React, { useEffect, useRef } from 'react';
import './ImageCard.css'; // Import CSS file for styling
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import StarIcon from '@mui/icons-material/Star';
import Rating from '@mui/material/Rating';

const ImageCard = ({ imageUrl, title, rating, description }) => {
  const stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(<StarIcon key={i} />);
  }

  const truncatedDescription = description.length > 40 ? description.substr(0, 40) + '...' : description;

  return (
    <Card className="image-card">
      <Card.Img variant="top" src={imageUrl} alt={title} className="image" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{truncatedDescription}</Card.Text>
        <div className="ratings">{stars}</div>
        <Button variant="success">See More</Button>
      </Card.Body>
    </Card>
  );
};

const HorizontalScrollableImageCards = ({ images }) => {
  const scrollContainerRef = useRef(null);
  let animationFrameRef = useRef(null);

  useEffect(() => {
    const scrollLoop = () => {
      if (scrollContainerRef.current) {
        const scrollContainer = scrollContainerRef.current;
        scrollContainer.scrollLeft += 1; // Adjust the scrolling speed as needed
        if (scrollContainer.scrollLeft === scrollContainer.scrollWidth - scrollContainer.clientWidth) {
          scrollContainer.scrollLeft = 0; // Reset scroll position to loop
        }
      }
      animationFrameRef.current = requestAnimationFrame(scrollLoop);
    };

    animationFrameRef.current = requestAnimationFrame(scrollLoop);

    return () => cancelAnimationFrame(animationFrameRef.current);
  }, []);

  return (
    <div className="scroll-container" ref={scrollContainerRef}>
      {images.map((image, index) => (
        <ImageCard
          key={index}
          imageUrl={image.url}
          title={image.title}
          rating={image.rating}
          description={image.description}
        />
      ))}
    </div>
  );
};

export default HorizontalScrollableImageCards;
