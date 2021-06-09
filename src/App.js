import { render } from 'react-dom';
import './App.css';
// import Todolist from './components/Todolist';

export default function App() {
  const todos = [
    { id: 1, text: "Wash dishes", done: false },
    { id: 2, text: "Do laundry", done: false },
    { id: 3, text: "Take shower", done: false }
  ];
  return (
    <div className="App">
      <h1>Checklist</h1>
      <Todolist todos={todos}/>
    </div>
  );
}


//object destructuring on props object: props > {todos}
function Todolist({todos}) {
  return (
    <ul>
      {todos.map(todo=> (
        <li key={todo.id}>{todo.text}</li>
  
      ))}

    </ul>
  )
}
