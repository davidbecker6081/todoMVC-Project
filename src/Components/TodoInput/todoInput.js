import React from 'react'
import TodoInputContainer from '../../Containers/todoInputContainer'

class TodoInput extends React.Component {
    constructor() {
        super()
        this.state = {
            input: ''
        }
        this.submitTodo = this.submitTodo.bind(this)
        this.clearInput = this.clearInput.bind(this)
    }

    clearInput() {
        this.setState({
            input: ''
        })
    }

    submitTodo(e) {
        e.preventDefault()
        this.props.addTodo(this.state.input)
        this.clearInput()
    }

    render() {
        const { input } = this.state
        return (
            <form className="todoInput-wrapper">
                <input placeholder="Create a Todo" value={input} onChange={(e) => this.setState({ input: e.target.value })}/>
                <button onClick={(e) => this.submitTodo(e)}>Add Todo</button>
            </form>
        )
    }
}

export default TodoInputContainer(TodoInput)