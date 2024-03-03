import React, { useState } from 'react';

const TodoApp = () => {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputText.trim()) {
      setTodos([...todos, { text: inputText, completed: false }]);
      setInputText('');
    }
  };

  const handleToggleComplete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  const handleRemoveTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-app">
      <h1>Todo App</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter a task..."
          value={inputText}
          onChange={handleInputChange}
        />
        <button onClick={handleAddTodo}>Add Item</button>
      </div>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li
            key={index}
            className={todo.completed ? 'completed' : ''}
          >
            <span
              onClick={() => handleToggleComplete(index)}
            >
              {todo.text}
            </span>
            <button
              onClick={() => handleRemoveTodo(index)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
