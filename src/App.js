import React, {useState} from 'react';
import './App.css';
import TodoTable from './components/TodoTable';
import NewToDoForm from './components/NewTodoForm';


function App() {

  const [todos, setTodos] = useState([ { index: 1, work: 'Learn React', assignedTo: 'John' },
     { index: 2, work: 'Learn Angular', assignedTo: 'Smith' },
     { index: 3, work: 'Learn Vue', assignedTo: 'Doe' },
     { index: 4, work: 'Learn Node', assignedTo: 'Guy Ritchie' }
  ])
  /*this is a commnet*/

  const addTodo = () => {

    if(todos.length > 0){
      const newTodo = {
        index: todos.length + 1,
        work: getNewWork(),
        assignedTo: getNewAssignedTo()
      }
      setTodos(todos => [...todos, newTodo])
    }

  }

  const getNewWork = () => {
    //create random string with new work
    return 'Learn React';
  }

  const getNewAssignedTo = () => {
    //create random string with new assignedTo
    return 'John';
  }

  return (

    <div className="mt-5 container">
      <div className='card'>
        <div className='card-header'>
          My Todo's
        </div>
        <div className='card-body'>
          <TodoTable todos={todos} />
        <button className='btn btn-primary' onClick={addTodo}>Add Todo</button>
        <NewToDoForm/>
        </div>
      </div>

    </div>
  );
}

export default App;
