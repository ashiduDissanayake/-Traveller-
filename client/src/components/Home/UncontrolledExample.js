import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import image1 from "./image1.png";
import image2 from "./image2.png";
import image3 from "./image3.png";
import "./uncon.css";

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src={image1} alt="First slide" width="100%" />
        <Carousel.Caption>
          <div className="text-title">
            <h1 className="head-title">Make a Journey of </h1>
            <h1 className="head-title">Love</h1>
            <h6 className="content-title">Your Ultimate Travel Partner.</h6>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={image2} alt="second slide" width="100%" />
        <Carousel.Caption>
          <div className="text-title">
            <h1 className="head-title">Make a Journey of </h1>
            <h1 className="head-title">Love</h1>
            <h6 className="content-title">Your Ultimate Travel Partner.</h6>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={image3} alt="third slide" width="100%" />
        <Carousel.Caption>
          <div className="text-title">
            <h1 className="head-title">Make a Journey of </h1>
            <h1 className="head-title">Love</h1>
            <h6 className="content-title">Your Ultimate Travel Partner.</h6>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
