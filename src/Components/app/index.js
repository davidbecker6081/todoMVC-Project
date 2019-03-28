import React from 'react'
import { Route, Link } from 'react-router-dom'
import Home from '../home'
import About from '../about'
import TodoInput from '../TodoInput/todoInput'

const App = () => (
  <div>
    <header>
      <Link to="/">Home</Link>
      <Link to="/about-us">About</Link>
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/" component={TodoInput} />
      <Route exact path="/about-us" component={About} />
    </main>
  </div>
)

export default App
