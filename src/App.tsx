import React, { useState } from "react";
import { Todos } from "./components/Todos";
import "./App.css"; // Ruta al archivo de estilos
import { TodoId } from "../types/types";

const mockTodos = [
  {
    id: 1,
    title: "Todo 1",
    completed: false
  },
  {
    id: 2,
    title: "Todo 2",
    completed: false
  },
  {
    id: 3,
    title: "Todo 3",
    completed: false
  }
]

const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mockTodos)

  const onRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos)
  }

  return (
    <div className="todo-app">
      <div className="container">
        <h1>Todo-list TypeScript</h1>
        <Todos onRemove={onRemove} todos={todos} />
      </div>
    </div>
  )
}

export default App
