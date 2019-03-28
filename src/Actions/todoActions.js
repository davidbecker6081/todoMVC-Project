import constants from '../utilities/constants'

export const addTodo = todo => ({
    type: constants.ADD_TODO,
    todo
})