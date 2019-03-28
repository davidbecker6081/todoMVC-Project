import constants from '../utilities/constants'

export const increment = () => {
    return dispatch => {
        dispatch({
            type: constants.INCREMENT
      })
    }
  }
  
  export const decrement = () => {
    return dispatch => {
      dispatch({
        type: constants.DECREMENT
      })
    }
  }
  