import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {changeColor} from '../features/themeSlice'

function Theme() {

const dispatch = useDispatch();
const [color, setColor] = useState('');

const handleChange = (event)=>{
        setColor(event.target.value);
}

  return (
    <div>
        <input type='text' onInput={handleChange}/>
        <button onClick={()=>{dispatch(changeColor(color))}}>Change Color</button>
    </div>
  )
}

export default Theme