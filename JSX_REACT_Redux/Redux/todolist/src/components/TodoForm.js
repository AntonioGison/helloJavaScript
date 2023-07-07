import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todosSlice'


function TodoForm() {
    const [inputValue, setInputValue] = useState('');

    const handleInput = (event) => {
        setInputValue(event.target.value);
    }

    const dispatch = useDispatch();

    const handleDispatch = (event) => {
        event.preventDefault();
        dispatch(addTodo(inputValue));
        setInputValue('');
    }

  return (
    <div>
        <input onChange={handleInput} type='text' value={inputValue} />
        
        <button onClick={handleDispatch}>Add</button>
    </div>

  )
}

export default TodoForm