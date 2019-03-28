import constants from '../utilities/constants'

const initialState = {
  count: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.INCREMENT:
      return {
        ...state,
        count: state.count + 1
      }

    case constants.DECREMENT:
      return {
        ...state,
        count: state.count - 1
      }

    default:
      return state
  }
}