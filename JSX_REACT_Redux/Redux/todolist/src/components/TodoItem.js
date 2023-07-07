import React from 'react';
import { useSelector } from 'react-redux';

function TodoItem() {
   const tasks = useSelector(state => state.todos);

   console.log(`this one ${tasks}`);
  return (
    <ul>
      {tasks?.map(task => (
        <label>
        <input type='checkbox' />
        <li key={task.id}>{task.title}</li>
        </label>
      ))}
    </ul>
  );
}

export default TodoItem;
