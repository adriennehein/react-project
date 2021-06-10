import { render } from 'react-dom';
import React from 'react';
import './App.css';
// import Todolist from './components/Todolist';

export default function App() {
  const [todos, setTodos] = React.useState([
    { id: 1, text: "Wash dishes", done: false },
    { id: 2, text: "Do laundry", done: false },
    { id: 3, text: "Take shower", done: false }
  ]);
  
  return (
    <div className="App">
      <h1>Checklist</h1>
      <Todolist todos={todos}/>
      <AddTodo setTodos={setTodos} />
    </div>
  );
}

// //object destructuring on props object: props > {todos}

function Todolist({todos})  {
  return (
    <ul>
      { todos.map(todo => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  )
}

function AddTodo( {setTodos} ) {
  const inputRef = React.useRef();
  function handleSubmit(e) {
    e.preventDefault();
    const text = e.target.elements.addTodo.value;
    const todo = {
      id: 4,
      text,
      done: false,
    };
    setTodos( prevTodos => {
      return prevTodos.concat(todo);
    });
    inputRef.current.value = '';

  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="addTodo">Add Item</label>
      <input id="addTodo" ref={inputRef} />
      <button type="submit">Add</button>
    </form>
  )
}

