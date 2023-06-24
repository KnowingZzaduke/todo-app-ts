import type { TodoId, ListOfTodos } from "../../types/types";
import { TodoList } from "./Todo";

interface Props {
  todos: ListOfTodos
  onRemove: (id: TodoId) => void
}

export const Todos: React.FC<Props> = ({ todos, onRemove }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li className={`todo-item ${todo.completed ? "completed" : ""}`} key={todo.id}>
          <TodoList
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            onRemove={onRemove}
          />
        </li>
      ))}
    </ul>
  )
}
