import React from "react";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

//importing Local-Files
import ButtonComponent from "./ButtonComponent";

const SignUpPage = () => {
  return (
    <div>
      <h2>Sign-Up Page</h2>
      <Form>
        <Form.Group>
          <Form.Group>
            <Form.Label>User Name</Form.Label>
            <Form.Control type="text" placeholder="User Name" />
          </Form.Group>
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" placeholder="E-mail" size="5" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Conform Password</Form.Label>
          <Form.Control type="password" placeholder="Conform Password" />
        </Form.Group>
        <Link to="/login">
          <ButtonComponent label="Sign Up" variant="outline-secondary" />
        </Link>
      </Form>
      {/* Login Link */}
      <h6>
        Already a User? <Link to="/login">Login Here</Link>
      </h6>
    </div>
  );
};

export default SignUpPage;
