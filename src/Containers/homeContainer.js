import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  increment,
  decrement,
} from '../Actions/counter'

const mapStateToProps = ({ counter }) => ({
  count: counter.count
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      increment,
      decrement,
      changePage: () => push('/about-us')
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)