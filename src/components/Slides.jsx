import React from "react";
import Carousel from "react-bootstrap/Carousel";
// import Image from "react-bootstrap/Image";
import "bootstrap/dist/css/bootstrap.css";
function Slide() {
  return (
    <div className="card">
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block "
            src={process.env.PUBLIC_URL + "images/item-7.jpeg"}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block  "
            src={process.env.PUBLIC_URL + "images/item-2.jpeg"}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block  "
            src={process.env.PUBLIC_URL + "images/item-4.jpeg"}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block  "
            src={process.env.PUBLIC_URL + "images/item-5.jpeg"}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block "
            src={process.env.PUBLIC_URL + "images/item-3.jpeg"}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slide;
