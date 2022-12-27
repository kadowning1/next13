import React from 'react'
import TodoList from './TodoList'

interface RootLayoutProps {
  children: React.ReactNode
}

const RootLayout = ({ children }: RootLayoutProps) => {

  return (
    <main className='flex'>
      <div>
        {/* @ts-ignore */}
        <TodoList />
      </div>
      <div className='flex-1'>
        {children}
      </div>
    </main>
  )
}

export default RootLayout