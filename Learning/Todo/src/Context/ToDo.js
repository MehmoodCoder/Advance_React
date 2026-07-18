import { createContext, useContext } from "react";


export const TodoContext = createContext({
    Todos : [
        {
            id: 1,
            todo: "To Do Msg",
            completed: false,
        },
    ],
        AddTodo: (Todo) => {},
        UpdateTodo: (Todo, id) => {},
        DeleteTodo: (id) => {},
        Completed: (id) => {},
})

export const useToDo = () => {
    return (
        useContext(TodoContext)
    )
}

export const TodoProvider = TodoContext.Provider
