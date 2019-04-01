import { connect } from 'react-redux'

const mapStateToProps = ({ todoReducer }) => ({
  todos: todoReducer.todos
})

export default connect(mapStateToProps)