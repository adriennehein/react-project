import React, {useState} from 'react';
import './App.css';


export default function App () {
    const [todos, setTodos] = useState([
        { id: 1, text: "Wash dishes", done: false },
        { id: 2, text: "Do laundry", done: true },
        { id: 3, text: "Take shower", done: false }
    ]);
    return (
        <div className="app">
            <h1>App Redo</h1>
            <Todolist todos={todos} setTodos={setTodos} />
            <AddTodo setTodos={setTodos}/>
        </div>
    )
}

function Todolist ({todos, setTodos}) {
    function updateTodo(todo) {
        const updatedTodos = todos.map( (t) =>
            t.id === todo.id ? {
                ...t,
                done: !t.done,
            }
            : t
        )
        setTodos(updatedTodos);
    }
    return (
        <ul>
            {todos.map( (todo) => (
                <li 
                    key={todo.id} 
                    style={{
                        textDecoration: todo.done ? 'line-through' : ''
                    }}
                    onDoubleClick={() => updateTodo(todo)}
                >{todo.text}
                <DeleteTodo todo={todo} setTodos={setTodos} />
                </li>
            ))}
        </ul>
    )
}

function DeleteTodo({todo, setTodos}) {
    function handleDelete() {
        const confirmed = window.confirm('Delete?');
        if (confirmed) {
            setTodos((prevTodos) => {
                return prevTodos.filter((t) => t.id !== todo.id)
            })
        }
    }
    return (
        <span
            role="button"
            onClick={handleDelete}
            style={{
                color: 'red',
                fontWeight: '700',
                marginLeft: 10,
            }}
            >X</span>
    )

}

function AddTodo({setTodos} ) {
    const inputRef = React.useRef();

    function handleSubmit(e) {
        e.preventDefault();
        const text = e.target.elements.addTodo.value;
        const todo = { 
            id: Math.random(), 
            text, 
            done: false, 
        };

        setTodos( prevTodos => {
            return prevTodos.concat(todo);
        })

        inputRef.current.value = "";


    }
    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="addTodo">Add New</label>
            <input id="addTodo" ref={inputRef}/>
            <button type="submit">Add</button>
        </form>
    )
}