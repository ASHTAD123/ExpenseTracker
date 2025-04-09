import React, { useState } from "react";
import { Dropdown, ListGroup, InputGroup, Form, Button } from "react-bootstrap";

const CustomDropDownList = ({ predefinedOptions = [] }) => {
  

console.log("predefinedOptions inside AddExpense:", predefinedOptions);
  const [list, setList] = useState(predefinedOptions);
  const [value, setValue] = useState();
  const [customValue, setCustomValue] = useState("");

  const handleSelect = (value) => {
    console.log("HERE");

    console.log(value);
    setList([...list, value]);
    setValue(value);
  };

  const handleCustomAdd = (value) => {
    setValue(value);
  };
  return (
    <div className="container mt-4">
      <Dropdown onSelect={handleSelect}>
        <Dropdown.Toggle variant="primary">Select an Option</Dropdown.Toggle>

        <Dropdown.Menu>
        
        {predefinedOptions .map((option, index) => {
            <Dropdown.Item key={index} eventKey={option}>
            {option}
            </Dropdown.Item>; // ❌ This line does nothing, as there's no return
        })}
</Dropdown.Menu>

      </Dropdown>

      <InputGroup className="mt-3">
        <Form.Control
          type="text"
          placeholder="Enter your own expense type"
          value={customValue}
          onChange={(e) => setCustomValue(e.target.value)}
        />

        <Button variant="success" onClick={handleCustomAdd}>
          Add
        </Button>
      </InputGroup>

      {/* <ListGroup className="mt-3">

                {
                    list.map( (item,index) =>{
                        <ListGroup.Item key={index}>{item}</ListGroup.Item>
                    })
                }
             </ListGroup> */}
    </div>
  );
};

export default CustomDropDownList;
