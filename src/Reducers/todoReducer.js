import constants from '../utilities/constants'

const initialState = {
    todos: []
}

export default (state = initialState, action) => {
    switch(action.type) {
        case constants.ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.todo]
            }
        case constants.DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter((_todo, i) => i !== action.key)
            }
        default:
            return state
    }
}