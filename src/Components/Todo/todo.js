import React from 'react'
import './todo.css'

const Todo = ({ todo, onDelete }) => {
    return (
        <article className="todo">
            <div className="todo-value">
                { todo.value }
            </div>
            <button className="todo-delete" onClick={() => onDelete()}>X</button>
        </article>
    )
}

export default Todo