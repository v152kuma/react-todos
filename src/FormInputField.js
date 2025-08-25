import React from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export function FormInputField(props) {

    return (
        /* <InputGroup size="sm" className="mb-3" 
        value={props.value}
        type="text"
        onChange={props.onChange}
        placeholder="Enter new task">
        <InputGroup.Text id="inputGroup-sizing-sm"
                  
                    >Task Name</InputGroup.Text>
        <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
        />
      </InputGroup> */
<input

            className="px-2 mt-2 mb-2 ms-1"
            value={props.value}
            type="text"
            onChange={props.onChange}
            placeholder="Enter new task"

        />
    )
}