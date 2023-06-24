// Utilizamos la palabra reservada 'interface' para definir la interfaz del tipo 'Todo'
export interface Todo {
  id: number
  title: string
  completed: boolean
}

// Utilizamos la palabra reservada 'type' para definir los tipos adicionales
export type TodoId = Pick<Todo, 'id'>
export type TodoTitle = Pick<Todo, 'title'>
export type TodoCompleted = Pick<Todo, 'completed'>

export type ListOfTodos = Todo[]
