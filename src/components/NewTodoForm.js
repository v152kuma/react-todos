import React from "react";

function NewToDoForm({ addTodo }) {
    return (
        <div>
            <form>
                <div className='mt-5'>
                    <label className="form-label">Assigned To</label>
                    <input type='text' className='form-control' id='assignedTo' required />
                </div>
                <div className='mb-3'>
                    <label htmlFor='assignedTo'>Work</label>
                    <textarea className='form-control' id='work' required rows={3} />
                </div>
                <button className='btn btn-primary' onClick={addTodo}>Add Todo</button>
            </form>
        </div>
    )
}

export default NewToDoForm;