import React from 'react'
import AllTodosContainer from '../../Containers/alltodosContainer'
import Todo from '../Todo/todo'
import './allTodos.css'

class AllTodos extends React.Component {
    render() {
        return (
            <section className="allTodos">
                {
                    this.props.todos.map((todo, i) => 
                        <Todo
                            key={i}
                            todo={todo}
                            onDelete={this.props.deleteTodo.bind(this, i)}
                            completed={todo.completed}
                            onToggleCompleted={this.props.toggleCompleted.bind(this, i)}
                            onUpdateTodo={this.props.updateTodo.bind(this, i)}
                        />
                    )
                }
            </section>
        )
    }
}

export default AllTodosContainer(AllTodos)