import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem  from '../components/TodoItem'

function TodoList() {
   const tasks = useSelector(state => state.todos);

  return (
    <ul>
      {tasks?.map(task => (

        <label key={task.id}>
        <TodoItem  key={task.id}  id={task.id} title={task.title} completed={task.completed} />
        </label>
      ))}
    </ul>
  );
}

export default TodoList;
