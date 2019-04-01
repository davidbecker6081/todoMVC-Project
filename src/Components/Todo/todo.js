import React from 'react'
import './todo.css'

const Todo = ({ todo, onDelete, completed, onToggleCompleted }) => {
    const completedClass = completed ? 'todo-value--completed' : ''
    return (
        <article className="todo">
            <input type="checkbox" checked={completed} onChange={() => onToggleCompleted()}/>
            <div className={`todo-value ${completedClass}`}>
                { todo.value }
            </div>
            <button className="todo-delete" onClick={() => onDelete()}>X</button>
        </article>
    )
}

export default Todo