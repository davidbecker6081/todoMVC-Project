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

    submitTodo(input) {
        this.props.addTodo(input)
        this.clearInput()
    }

    render() {
        const { input } = this.state
        return (
            <div className="todoInput-wrapper">
                <input placeholder="Create a Todo" value={input} onChange={(e) => this.setState({ input: e.target.value })}/>
                <button onClick={() => this.submitTodo(input)}>Add Todo</button>
            </div>
        )
    }
}

export default TodoInputContainer(TodoInput)