import { useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { AddTodoAction, RemoveTodoAction } from './actions/TodoActions';

function App() {

  const [todo, setTodo] = useState();
  const dispatch = useDispatch();
  const Todo = useSelector((state) => state.Todo)
const {todos} = Todo;
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AddTodoAction(todo));
  }

  const removeHandler = (t) => {
    dispatch(RemoveTodoAction(t));
  }

  

  return (
    <div className="App">
      <header className='App-header'>
          <h2>React Todo App</h2>
          <form onSubmit={handleSubmit}>
              <input placeholder='Enter the task' style={{
                width: 250,
                padding: 10,
                borderRadius: 20,
                border: "none",
                fontSize: 10,
              }}
              onChange={(e) => setTodo(e.target.value)}
              />
              <button type='submit' style={{
                padding: 10,
                borderRadius: 25,
                fontSize: 10,
                marginLeft: 20,
              }}>Add</button>
          </form>
          <ul className='allTodos'>
            {
              todos && todos.map((t)=>(
                <li key={t.id} className='singleTodo'>
              <span className='todoText'>{t.todo}</span>
              <button style={{
                borderRadius: 25,
                padding: 10,
                border: "1px solid white",
                color: "white",
                backgroundColor: "orangered",
                cursor: 'pointer',
                fontSize: 10,
                marginLeft: 15,
              }}
              onClick={()=>removeHandler(t)}>Delete</button>
            </li>
              ))
            }
            
          </ul>
      </header>
    </div>
  );
}

export default App;
