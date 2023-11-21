import React from "react";

const TodoItem = (props) => {
    return (
        <li className="Todo-Item">
            <span>
                <input type="checkbox"/>
                <span className="todo-item-text">{props.item}</span>
            </span>
            
            <p>...</p>
        </li>
    );
}

export default TodoItem;