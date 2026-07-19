import {createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: [{id: nanoid(), text: 'Add Todos'}]
}


export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), 
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        },
        editTodo: (state, action) => {
            state.todos = state.todos.map((todo) => action.payload.id == todo.id ? action.payload : todo)
        },
    }
})

export const {addTodo, removeTodo, editTodo} = todoSlice.actions

export default todoSlice.reducer