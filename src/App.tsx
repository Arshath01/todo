import React,{useState} from 'react';
import { Todo } from './Todo';

interface TodoItem{
  id:number;
  text:string;
  completed:boolean
}

 const App:React.FC=()=>{
  const [todos,setTodos] = useState<TodoItem[]>([]);
  const addTodo = (text:string)=>{
    const newTodo : TodoItem = {
      id : Date.now(),
      text,
      completed:false
    }

    setTodos([...todos,newTodo])
  }
  const toggleTodo = (id:number)=>{
    const updatedTodos = todos.map(todo=>
      todo.id === id ? {...todo,completed:!todo.completed} : todo
    );
    setTodos(updatedTodos)
  }
  return(
    <>
      <Todo addTodo={addTodo} todos= {todos} toggleTodo={toggleTodo}/>
    </>
  )
}

export default App;