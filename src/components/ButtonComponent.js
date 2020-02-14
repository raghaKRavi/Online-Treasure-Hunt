import React from "react";
import Button from "react-bootstrap/Button";

const ButtonComponent = props => {
  return (
    <div>
      <Button
        className="button"
        variant={props.variant}
        onClick={props.handleClick}
        type={props.type}
      >
        {props.label}
      </Button>
    </div>
  );
};

export default ButtonComponent;
