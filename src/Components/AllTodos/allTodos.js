import React from 'react'
import AllTodosContainer from '../../Containers/alltodosContainer'
import Todo from '../Todo/todo'

class AllTodos extends React.Component {
    render() {
        return (
            <section className="all-todos">
                {this.props.todos.map((todo, i) => <Todo key={i} todo={todo} />)}
            </section>
        )
    }
}

export default AllTodosContainer(AllTodos)