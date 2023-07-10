import React,  { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { removeTodo, completedTodo } from '../features/todosSlice'

function TodoItem({id, title, completed }) {
   const tasks = useSelector(state => state.todos);
   const dispatch = useDispatch();

   const handleDelete = () =>{

    dispatch(removeTodo({id}));

   console.log("Current ID:", id);
   console.log("tasks whole:", tasks);
   }

   const dosomething = ()=>{
        //if you donn't do it thee checkbox will be read only
        dispatch(completedTodo(id))
   }

  return (
    <ul>

        <label>
        <br></br>
        <input type='checkbox' checked={completed} onChange={dosomething}/>
        <li key={id}>{title}</li>
        <button onClick={() => handleDelete()}>delete</button>

        <br></br>
        </label>
    </ul>
  );
}

export default TodoItem;
