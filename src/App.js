import './App.css';
import { useState } from 'react';
import ToDoItems from './ToDoItems';
import AddForm from './AddForm';

function App() {

  const [toDoList, setToDoList] = useState([
    {text: "Buy Sugar", id: 1656632538430},
    {text: "Eat Carrots", id: 1656632478827}
  ]);

  function deleteItem(id){
    setToDoList((toDoList) => toDoList.filter((rec) => id !== rec.id));
  }

  const addTask = (userInput) =>{
    const newValue = {text: userInput, id: Date.now()};
    setToDoList ((toDoList) => [newValue, ...toDoList]);
  }
  return (
    <div className = "container">
      <div className='row mb-1 ms-1 me-1 mt-2'>
        <AddForm addTask = {addTask}></AddForm>
      </div>

      <div className ="row mb-3 ms-1 me-1 mt-3">
        <ToDoItems entries={toDoList} deleteItem={deleteItem}></ToDoItems>
      </div>

    </div>
  );
}

export default App;
