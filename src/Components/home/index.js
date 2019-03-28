import React from 'react'
import HomeContainer from '../../Containers/homeContainer'

const Home = props => (
  <div>
    <h1>Home</h1>
    <p>Count: {props.count}</p>

    <p>
      <button onClick={props.increment}>Increment</button>
    </p>

    <p>
      <button onClick={props.decrement}>Decrement</button>
    </p>

    <p>
      <button onClick={() => props.changePage()}>
        Go to about page via redux
      </button>
    </p>

    {props.todos}
  </div>
)

export default HomeContainer(Home)
