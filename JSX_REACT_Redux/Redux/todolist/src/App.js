import './App.css';
import Profile from './components/Profile';
import Login from './components/Login';
import Theme from './components/Theme';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

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
      <TodoList />
    </div>
  );
}

export default App;
