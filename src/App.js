import React, { useState } from 'react';
import './App.css';
import TodoTable from './components/TodoTable';
import NewToDoForm from './components/NewTodoForm';


function App() {

  const [showAddTodoForm, setShowAddTodoForm] = useState(false);

  const [todos, setTodos] = useState([])
  

  const addTodo = (work, assignedTo) => {

    let index = 0;

    if (todos.length > 0) {
      index = todos[todos.length - 1].index + 1;

    }
    else {
      index = 1;
    }
    const newTodo = {
      index: index,
      work: work,
      assignedTo: assignedTo
    }
    setTodos(todos => [...todos, newTodo])
  }

  const deleteTodo = (index) => {
    let newTodos = todos.filter((todo) => todo.index !== index);
    setTodos(newTodos);
  }


return (

  <div className="mt-5 container">
    <div className='card'>
      <div className='card-header'>
        My Todo's
      </div>
      <div className='card-body'>

        <TodoTable todos={todos} deleteTodo={deleteTodo} />
        <button className='btn btn-primary' onClick={() => setShowAddTodoForm(!showAddTodoForm)}>
          {showAddTodoForm ? 'Close New Todo': 'New Todo'}
        </button>
        { showAddTodoForm &&
          <NewToDoForm addTodo={addTodo} />}
      </div>
    </div>

  </div>
);
}

export default App;
