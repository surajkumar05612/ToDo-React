import React, { useState } from 'react';
import './App.css';
import Form from './component/Form.js';
import TodoList from './component/TodoList.js';

function App() {

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <header>
        ToDo List App By Suraj
      </header>
      <Form 
      inputText={inputText}
      todos={todos} 
      setTodos={setTodos} 
      setInputText={ setInputText }/>
      <TodoList setTodos={setTodos} todos={todos}/>
    </div>
  );
}

export default App;
