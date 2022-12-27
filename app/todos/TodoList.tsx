import Link from 'next/link';
import React from 'react'

export type Todo = {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
}

const fetchTodos = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const todos: Todo[] = await response.json();
  // console.log(todos);
  return todos;
}

const TodoList = async () => {
  const todos = await fetchTodos();

  return (
    <>
    {todos.map((todo:Todo) => (
      <p key={todo.id}>
        <Link href={`/todos/${todo.id}`}>
          <a>{todo.title}</a>
          Todo: {todo.id}
        </Link>
      </p>
    ))}
    </>
  )
  
}

export default TodoList