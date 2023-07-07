import './App.css';
import Profile from './components/Profile';
import Login from './components/Login';
import Theme from './components/Theme';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';

function App() {
  return (
    <div className="App">
      <Profile /> 
      <Login />
      <br></br>
      <br></br>
      <Theme />
      <br></br>
      <TodoForm />
      <TodoItem />
    </div>
  );
}

export default App;
