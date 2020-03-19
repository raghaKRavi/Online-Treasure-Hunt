import React, { useState } from "react";

import ModalBox from "../components/ModalBox";
import Button from "react-bootstrap/Button";
import "../css/PersonalHuntStyle.css";

const PersonalHunt = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <div className="personalhunt-images">
        <figure class="snip1104 blue " onClick={() => setModalShow(true)}>
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample34.jpg"
            alt="sample34"
          />
          <dic className="instruction">Click to View more</dic>
          <figcaption>
            <h2>
              Personal <span> Hunts</span>
            </h2>
          </figcaption>
        </figure>
        <ModalBox show={modalShow} onHide={() => setModalShow(false)} />
      </div>
    </>
  );
};

export default PersonalHunt;
