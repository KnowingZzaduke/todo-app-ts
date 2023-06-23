import { useEffect, useState } from "react"
import { Todos } from "./components/Todo"

const mockTodos = [
  {
    id: "1",
    title: "Todo 1",
    completed: false
  },
  {
    id: "2",
    title: "Todo 2",
    completed: false
  },
  {
    id: "3",
    title: "Todo 2",
    completed: false
  }
]
const App = (): JSX.Element => {
  const [todos] = useState(mockTodos)

  return <Todos todos={todos} />
}

export default App
