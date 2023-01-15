import React , {useState} from "react";
import './App.css';
import TodoForm from "./component/TodoForm";
import TodoList from "./component/TodoList";

function App() {
  const [todos , setTodos] = useState([]);
  
  function addTodo(todo) {
    setTodos([todo, ...todos])
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>React Todos</p>
          <TodoForm addTodo = {addTodo} />
        <TodoList todos={todos} />
      </header>
    </div>
  );
}

export default App;
