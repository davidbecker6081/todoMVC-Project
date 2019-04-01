import constants from '../utilities/constants'

export const addTodo = todo => ({
    type: constants.ADD_TODO,
    todo
})

export const deleteTodo = key => ({
    type: constants.DELETE_TODO,
    key
})