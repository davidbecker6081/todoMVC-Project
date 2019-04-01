import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  deleteTodo
} from '../Actions/todoActions'

const mapStateToProps = ({ todoReducer }) => ({
  todos: todoReducer.todos
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      deleteTodo
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)