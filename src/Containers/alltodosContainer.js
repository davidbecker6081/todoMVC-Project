import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  deleteTodo,
  toggleCompleted
} from '../Actions/todoActions'

const mapStateToProps = ({ todoReducer }) => ({
  todos: todoReducer.todos
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      deleteTodo,
      toggleCompleted
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)