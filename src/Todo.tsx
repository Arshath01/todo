import React, { useState } from 'react';

interface TodoItem {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoProps {
  todos: TodoItem[];
  addTodo: (text: string) => void;
  toggleTodo: (id: number) => void;
}

export const Todo: React.FC<TodoProps> = ({ todos, addTodo, toggleTodo }) => {
  const [newTodoText, setNewTodoText] = useState('');

  const handleAddTodo = () => {
    if (newTodoText.trim()) {
      addTodo(newTodoText);
      setNewTodoText('');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold mb-4">Todo</h1>
        <input
          type="text"
          className="border rounded py-2 px-3 mb-4 w-full focus:blue-900"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
          placeholder="Enter todo item"
        />
        <button
          onClick={handleAddTodo}
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Add Todo
        </button>

        {todos.map((todo) => (
          <div key={todo.id} className="flex items-center mt-4">
            <p
              style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
              className="flex-grow"
            >
              {todo.text}
            </p>
            <input
              type="checkbox"
              onClick={() => toggleTodo(todo.id)}
              className="ml-4 h-5 w-5 "
            />
          </div>
        ))}
      </div>
    </div>
  );
};
