import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import picture1 from "../img/art-box.jpg";
import picture3 from "../img/scroll.jpg";
import picture2 from "../img/adventure.jpg";

import "../css/ActiveHuntCarouselStyle.css";
import ButtonComponent from "./ButtonComponent";

const ActiveHuntCarousel = props => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  var activeHuntsCarousel = {
    first: {
      src: picture1,
      alt: "picture1",
      huntTitle: "first",
      description:
        "A paragraph is a self-contained unit of a discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences. Though not required by the syntax of any language, paragraphs are usually an expected part of formal writing, used to organize longer prose."
    },
    second: {
      src: picture2,
      alt: "picture2",
      huntTitle: "second",
      description: "second hunt"
    },
    third: {
      src: picture3,
      alt: "picture3",
      huntTitle: "third",
      description: "third hunt"
    }
  };

  var arr = [];
  Object.keys(activeHuntsCarousel).forEach(function(key) {
    arr.push(activeHuntsCarousel[key]);
  });

  return (
    <>
      <div className="container hunt-body">
        <Carousel
          interval={60000}
          className="activehunt-carousel"
          activeIndex={index}
          direction={direction}
          onSelect={handleSelect}
          indicators={false}
          // controls={false}
        >
          {arr.map(item => (
            <Carousel.Item>
              <div className="picture-and-text">
                <img className="d-block" src={item.src} alt={item.alt} />
                <div className="hunt-title">
                  <h3>{item.huntTitle}</h3>
                  <p>{item.description}</p>
                  <ButtonComponent
                    className="activehunt-joinbutton"
                    label={"JOIN"}
                    variant={"outline-secondary"}
                  />
                </div>
              </div>
            </Carousel.Item>
          ))}
          ;
        </Carousel>
      </div>
    </>
  );
};

export default ActiveHuntCarousel;
