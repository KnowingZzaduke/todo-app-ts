import { type ListOfTodos } from '../types.d'

//  Hay ciertos casos en donde es mejor usar interface, en este caso lo utilizamos ya que no es un objeto. Lo utilizamos para pasar parámetros a los props

interface Props {
  todos: ListOfTodos
}
//  De esta manera tipamos las props
export const Todos: React.FC<Props> = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li className={`${todo.completed ? "completed" : ""}`} key={todo.id}>{todo.title} </li>
      ))}
    </ul>
  )
}
