import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

//Image Path
import maps from "../img/aged-map.jpg";
import compass from "../img/compass.jpg";
import mountain from "../img/mountain.jpg";
import tale from "../img/tale.jpg";
import scroll from "../img/scroll.jpg";
import puzzle from "../img/puzzle.jpg";
import "../css/ControlledCarouselStyle.css";

const ControlledCarousel = props => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  return (
    <Carousel
      className={props.className}
      activeIndex={index}
      direction={direction}
      onSelect={handleSelect}
      interval={50000}
    >
      <Carousel.Item>
        <img className="d-block w-100" src={maps} alt="First slide" />
        <Carousel.Caption style={{ color: "	RGB: (253,227,167)" }}>
          <h3>Treasure Hunt</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={tale} alt="Second slide" />

        <Carousel.Caption style={{ color: "	rgb:(41,41,41)" }}>
          <h3>Treasure Hunt</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="ml-auto">
        <img className="d-block w-100" src={puzzle} alt="Third slide" />

        <Carousel.Caption className="caption">
          <h3>Treasure Hunt</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default ControlledCarousel;
