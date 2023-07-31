import React, {useEffect,useState} from 'react'
import EditTodo from './EditTodo';

function ListTodos() {

    const [todos, setTodos] = useState([]);

    const getTodos = async () => {
        try {
            const response = await fetch("http://localhost:5000/todos")
            const jsonData = await response.json();

            setTodos(jsonData);
        } catch (error) {
            console.error(error.message);
        }
    }

    const deleteTodo = async id => {
        try {
            const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`,{
                method: "DELETE"
            });
            setTodos(todos.filter(todos => todos.todo_id !== id));
        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(()=>{
        getTodos();
    },[]);

  return (
    <div>
        <table className="table mt-5 text-center">
    <thead>
      <tr>
        <th>Description</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
     { todos.map(data=>(
         <tr key={data.todo_id}>
         <td>{data.description}</td>
         <td><EditTodo todo={data}/></td>
         <td><button className='btn btn-danger' onClick={ ()=> deleteTodo(data.todo_id)}>Delete</button></td>
       </tr>
     )) 
       }
    </tbody>
  </table>
    </div>
  )
}

export default ListTodos