import { render } from 'react-dom';
import React from 'react';
import './App.css';
// import Todolist from './components/Todolist';

export default function App() {
  //  data, update data func
  const [todos, setTodos] = React.useState([
    { id: 1, text: "Wash dishes", done: false },
    { id: 2, text: "Do laundry", done: true },
    { id: 3, text: "Take shower", done: false }
  ]);
  
  return (
    <div className="App">
      <h1>Checklist</h1>
      <Todolist setTodos={setTodos} todos={todos}/>
      <AddTodo setTodos={setTodos} />
    </div>
  );
}

// //object destructuring on props object: props > {todos}
function Todolist({todos, setTodos})  {
  function handleToggleTodo(todo) {
    const updatedTodos = todos.map((t) => 
      t.id === todo.id
        ? {
          ...t,
          done:!t.done
        }
        : t
    );
    setTodos(updatedTodos);

  }
  return (
    <ul>
      { todos.map(todo => (
        <li 
          style={{
            textDecoration: todo.done ? 'line-through'   : ''
            }}
          key={todo.id}
          onDoubleClick={() => handleToggleTodo(todo)}
        >
          {todo.text}
        <DeleteTodo todo={todo} setTodos={setTodos} />
        </li>
      ))}
    </ul>
  )
}

function DeleteTodo ({todo, setTodos}) {
  function handleDeleteTodo() {
    const confirmed  =  window.confirm('Are you sure you want to delete this task?');
    if (confirmed) {
      setTodos((prevTodos) => {
        return prevTodos.filter((t)=> t.id !== todo.id);
      })
    }
  }
  return (
    <span role="button" 
      onClick={handleDeleteTodo}
      style={{
        color: 'red',
        fontWeight: '700',
        marginLeft: 10,
      }}
    >
      X</span>
  )
}

function AddTodo( {setTodos} ) {
  React.useEffect(() => {
    console.log('ComponentDidMount Equivalent');
  }, []);

  React.useEffect(() => {
    return () => {
      console.log('ComponentWillUnmount Equivalent');
    }
  }, []);

  const inputRef = React.useRef();
  function handleSubmit(e) {
    e.preventDefault();
    const text = e.target.elements.addTodo.value;
    const todo = {
      id: Math.random(),
      text,
      done: false,
    };
    // set func declared in useState
    // concat() adds data to todo array in state
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

