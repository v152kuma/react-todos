import React, {useState} from "react";
import { FormInputField } from "./FormInputField"; 
import { FormSubmitButton } from "./FormSubmitButton";
const AddForm = ({addTask}) => {

    const [userIntput, setUserInput] = useState("");

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(userIntput.length > 0){
            addTask(userIntput);
        }

      setUserInput("");
    }

    return (
     <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-7">
            <FormInputField value ={userIntput} onChange={handleChange} />
        </div>

        <div className="col-5">
            <FormSubmitButton />
        </div>
      </div>

     </form>

    );

};

export default AddForm;