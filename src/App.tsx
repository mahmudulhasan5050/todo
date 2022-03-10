import { useState, useEffect } from 'react';
import './App.css';
import Form from './component/Form';
import TodoList from './component/TodoList';
import { InitialState } from './types';

function App() {
  //all states
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState<InitialState[]>([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState<InitialState[]>([]);

  //useEffect
  useEffect(() => {
    //functions
    const filterHandler = () => {
      switch (status) {
        case 'completed':
          setFilteredTodos(todos?.filter((todo) => todo.completed === true));
          break;
        case 'uncompleted':
          setFilteredTodos(todos?.filter((todo) => todo.completed === false));
          break;
        default:
          setFilteredTodos(todos);
          break;
      }
    };
    filterHandler();
  }, [todos, status]);

  return (
    <div className='App'>
      <header>My Todo List</header>
      <Form
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
