import React, { useState, useRef } from "react";

import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";

const InputGroupArea = props => {
  return (
    <>
      <div className="input-groups">
        <InputGroup className="mb-3 hunt-information" id={props.id}>
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-default">
              {props.name}
            </InputGroup.Text>
          </InputGroup.Prepend>

          <FormControl
            type={props.type}
            as={props.as}
            placeholder={props.placeholder}
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            disabled={props.disabled}
          />
        </InputGroup>
      </div>
    </>
  );
};

export default InputGroupArea;
