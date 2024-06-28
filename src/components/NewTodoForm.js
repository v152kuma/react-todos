import React, { useState } from "react";

function NewToDoForm(props) {

    const [assignedTo, setAssignedTo] = useState('');
    const [work, setWork] = useState('');

    const handleAssignedToChange = (e) => {
        setAssignedTo(e.target.value);
    }

    const handleWorkChange = (e) => {
        setWork(e.target.value);
    }

     const submitToDo = () =>{
       if(work !== '' && assignedTo !== ''){
           props.addTodo(work, assignedTo);
           setWork('');
           setAssignedTo('');
       }

     }

    return (
        <div>
            <form>
                <div className='mt-5'>
                    <label className="form-label">Assigned To</label>
                    <input type='text' className='form-control' id='assignedTo' required 
                    onChange={handleAssignedToChange}
                    value={assignedTo}
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor='assignedTo'>Work</label>
                    <textarea className='form-control' id='work' required rows={3}
                    onChange={handleWorkChange}
                    value={work} />
                </div>
                <button className='btn btn-primary' onClick={submitToDo}>Add Todo</button>
            </form>
        </div>
    )
}

export default NewToDoForm;