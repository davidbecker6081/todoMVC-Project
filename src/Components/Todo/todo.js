import React from 'react'
import './todo.css'

const Todo = ({ todo, onDelete, completed, onToggleCompleted, onUpdateTodo }) => {
    const completedClass = completed ? 'todo-value--completed' : ''
    return (
        <article className="todo">
            <input type="checkbox" checked={completed} onChange={() => onToggleCompleted()}/>
            <input
                type ="text"
                className={`todo-value ${completedClass}`}
                readOnly={true}
                onDoubleClick={(e) => {
                    e.currentTarget.readOnly = false
                }}
                onBlur={e => { onUpdateTodo(e.target.value); e.currentTarget.readOnly = true }}
                defaultValue={todo.value}
                onChange={e => console.log('value:', e.target.value)}/>
            <button className="todo-delete" onClick={() => onDelete()}>X</button>
        </article>
    )
}

export default Todo