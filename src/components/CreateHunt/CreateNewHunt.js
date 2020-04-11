import React, { useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";

import "./CreateNewHuntStyle.css";
import InputGroupArea from "../InputGroup/InputGroupArea";

const CreateNewHunt = () => {
  const [checked, setChecked] = useState(false);

  let passwordDisability = "disabled";

  const handleClick = () => {
    setChecked(!checked);
    console.log("checked");
  };

  if (checked == true) {
    passwordDisability = "";
  }

  return (
    <>
      <div className="newHuntInformation">
        <div className="input-area-left">
          <InputGroupArea name="Name" type="text" placeholder="Hunt's Name" />
          <div className="dateForHunt">
            <InputGroupArea
              name="Start Date"
              type="datetime-local"
              id="start-date"
            />
            <InputGroupArea
              name="End Date"
              type="datetime-local"
              id="end-date"
            />
          </div>

          <Form.Group controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="Required Password"
              onClick={handleClick}
              checked={checked}
            />
          </Form.Group>
          <InputGroupArea
            name="Password"
            type="password"
            placeholder="Password"
            disabled={passwordDisability}
          />

          <InputGroupArea
            name="Description"
            type="text"
            placeholder="Hunt's Description"
            as="textarea"
          />
        </div>
        <div className="input-area-right">
          <InputGroupArea />
        </div>
      </div>
      Create Hunt
    </>
  );
};

export default CreateNewHunt;
