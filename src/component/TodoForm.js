import React , {useState} from "react";
import {v4 as uuid} from "uuid";

function TodoForm({ addTodo }) {
    const [todo, setTodo] = useState({
        id: "",
        task: "",
        completed: false
    });

    function handleTaskInputChange(e) {
        setTodo({...todo, task: e.target.value});
    }
    
    function handleSubmmit(e) {
        e.preventDefault();
        if (todo.task.trim()){
            addTodo({...todo, id: uuid.v4() });
            //reset task input
            setTodo({...todo, task: ""});
        }

    }

    return(
        <form onSubmit={handleSubmmit}>
            <input
                name={"task"}
                type={"text"}
                value={todo.task}
                onChange={handleTaskInputChange}
            />
            <button> Submit</button>
        </form>
    );
}

export default TodoForm;