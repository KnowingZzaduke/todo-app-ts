// Acá usamos type ya que estamos tipando un objeto
export type Todo = {
  id: string
  title: string
  completed: boolean
}

export type ListOfTodos = Todo[]
