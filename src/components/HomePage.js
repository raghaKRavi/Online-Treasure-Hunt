import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

//Importing Files
import ButtonComponent from "./ButtonComponent";

const HomPage = () => {
  return (
    <div>
      <h1> Online Treasure Hunt</h1>
      <Link to="/signup">
        <ButtonComponent label="Sign Up" variant="primary" />
      </Link>
      Already a User? <Link to="/login">Login Here</Link>
    </div>
  );
};

export default HomPage;
