import type { Todo, TodoId } from "@types/types"
interface Props extends Todo {
  onRemove: (id: TodoId) => void
}

export const TodoList: React.FC<Props> = ({ id, title, completed, onRemove }) => {
  return (
    <div className={`view ${completed ? "completed" : ""}`}>
      <input
        className="toggle-all"
        type="checkbox"
        checked={completed}
      />
      <label>{title}</label>
      <button
        className="delete-button"
        onClick={() => {
          onRemove({ id })
        }}
      >
        Eliminar Tarea
      </button>
    </div>
  )
}
