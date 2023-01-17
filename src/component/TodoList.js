import React from "react";
import Todo from "./Todo";

function TodoList({ todos }) {
    return(
        <ul>
            {
                todos.map(result => (
                     <Todo key={result.id} todo={result}/>
                ))
            }
        </ul>
    );
}



export default TodoList;