import React from 'react'

const Todo = ({ todo }) => {
    return (
        <article className="todo">
            { todo.value }
        </article>
    )
}

export default Todo