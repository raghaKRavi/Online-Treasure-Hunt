import React from "react";
import Form from "react-bootstrap/Form";
import ButtonComponent from "./ButtonComponent";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div>
      <h3>Login Page</h3>
      <Form>
        <Form.Group>
          <Form.Label>E-mail</Form.Label>
          <Form.Control type="email" placeholder="E-Mail I.D" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <ButtonComponent
          variant="outline-secondary"
          label="Login"
          className="loginButton"
        />
      </Form>
      <h6>
        Not a User! <Link to="/signup">Sign-Up</Link>
      </h6>
    </div>
  );
};

export default LoginPage;
