import React from "react";
import Button from "react-bootstrap/Button";

const ButtonComponent = props => {
  return (
    <div>
      <Button
        className={props.className}
        variant={props.variant}
        onClick={props.handleClick}
        type={props.type}
      >
        <span style={{ cursor: "pointer" }}>{props.label}</span>
      </Button>
    </div>
  );
};

export default ButtonComponent;
