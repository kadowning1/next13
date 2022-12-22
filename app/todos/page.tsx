import React from 'react'
import TodoList from './TodoList'

const Todos = () => {
  return (
    <div className='bg-purple-300'>
      {/* @ts-ignore */}
      <TodoList />
    </div>
  )
}

export default Todos