import React from 'react'
import { useDispatch } from "react-redux";
import { login, logout } from '../features/userSlice';

function Login() {
    const dispatch = useDispatch();
  return (
    <div>
    <button
        onClick={()=>{dispatch(login({	name: "Pedro", age: 20, email: "p@gmail.com"}))}}
    >Login</button>
    <button onClick={  ()=>{dispatch(logout())}     }>logout</button>
    
    </div>
  )
}

export default Login