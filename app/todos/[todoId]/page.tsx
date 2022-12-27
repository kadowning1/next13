import React from 'react'
import { Todo } from '../TodoList'

export type PageProps = {
  params: {
    todoId: string
    searchTerm?: string
  }
}

const fetchTodo = async (todoId: string) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`, { next: { revalidate: 60 } })
  const todo: Todo = await response.json()
  return todo
}

const TodoPage = async ({ params: { todoId } }: PageProps) => {
  const todo = await fetchTodo(todoId)
  if (!todo.id) {
    return <p>Todo not found</p>
  }
  return (
    <div className='p-10 bg-yellow-200 border-2 m-2 shadow-lg'>
      <p>
        #{todo.id} {todo.title}
      </p>
      <p>Completed: {todo.completed ? "Yes" : "No"}</p>
      <p className='border-t border-black mt-5 text-right'>User: {todo.userId}</p>
    </div>
  )
}

export default TodoPage;

async function path() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos')
  const todos: Todo[] = await response.json();

  const trimmedTodos = todos.slice(0, 10);

  const paths = trimmedTodos.map((todo) => ({
    params: {
      todoId: todo.id.toString(),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}