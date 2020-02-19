import React from "react";
import { Link } from "react-router-dom";

//Bootstap import
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";

//Importing Files
import ButtonComponent from "./ButtonComponent";
import "../css/HomePageStyle.css";

import ControlledCarousel from "./ControlledCarousel";

const HomPage = () => {
  return (
    <div className="body">
      <Navbar className="NavBar fixed-top" expand="lg">
        <div className="container">
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Link to="/signup">
                <ButtonComponent
                  label={"Sign Up"}
                  variant={"btn"}
                  className="btn"
                />
              </Link>
              <Link to="/login">
                <ButtonComponent
                  label={"Login"}
                  variant={"btn"}
                  className="btn"
                />
              </Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
      {/* carousel */}
      <ControlledCarousel clasName={"slideShow"} />
    </div>
  );
};

export default HomPage;
