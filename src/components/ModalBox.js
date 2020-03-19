import React from "react";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import "../css/ModalBoxStyle.css";
import picture1 from "../img/aged-map.jpg";
import picture3 from "../img/directory.jpg";
import picture2 from "../img/pawns.jpg";

const ModalBox = props => {
  var personalHuntList = {
    first: {
      src: picture1,
      alt: "picture1",
      title: "Treasure Hunt-1",
      description: "Just a Hunt"
    },
    second: {
      src: picture2,
      alt: "picture2",
      title: "Hunt-2",
      description: "Just a Hunt"
    },
    third: {
      src: picture3,
      alt: "picture3",
      title: "Hunt-3",
      description: "Just a Hunt"
    }
  };

  var personalHuntArray = [];
  Object.keys(personalHuntList).forEach(key => {
    personalHuntArray.push(personalHuntList[key]);
  });

  console.log(personalHuntArray);

  return (
    <>
      <Modal
        show={props.show}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        dialogClassName="modal-90w"
      >
        <Modal.Header>
          <Modal.Title className="modal-title">
            <h3>Personal Hunts</h3>
          </Modal.Title>
          <Button
            onClick={props.onHide}
            className="modalHeader-close float-right"
          >
            <span aria-hidden="true">&times;</span>
          </Button>
        </Modal.Header>

        <Modal.Body>
          <div className="grid">
            {personalHuntArray.map(item => (
              <figure className="effect-sadie">
                <img src={item.src} alt="img02" />
                <figcaption>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                </figcaption>
              </figure>
            ))}
          </div>
          {/* <div className="image-container">
            {personalHuntArray.map(item => (
              <div className="image-column">
                <img src={item.src} className="modal-img" />
                <p>{item.title}</p>
              </div>
            ))}
          </div> */}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalBox;
