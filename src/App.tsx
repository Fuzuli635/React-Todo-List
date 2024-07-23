import React from 'react'
import './app.css'
import TodoCreate from './components/TodoCreate'
import TodoList from './components/TodoList'

const App = () => {
  return (
    <>
      <TodoCreate />
      <TodoList /> 
    </>
  )
}

export default App