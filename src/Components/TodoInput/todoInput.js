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
        this.constructTodo = this.constructTodo.bind(this)
    }

    clearInput() {
        this.setState({
            input: ''
        })
    }

    constructTodo(todoInput) {
        return {
            value: todoInput
        }
    }

    submitTodo(e) {
        e.preventDefault()
        if (this.state.input) {
            const todo = this.constructTodo(this.state.input)
            this.props.addTodo(todo)
            this.clearInput()
        }
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