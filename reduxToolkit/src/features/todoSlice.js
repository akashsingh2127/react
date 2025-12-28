// src/features/todoSlice.js
import { createSlice, nanoid } from '@reduxjs/toolkit'

// nanoid → generates unique IDs automatically

const initialState = {
  todos: [{ id: 1, text: 'Hello, World!' }],
}

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      }
      state.todos.push(todo)
      //because our initialState is the state 
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload)
    },
  },
})

export const { addTodo, removeTodo } = todoSlice.actions
export default todoSlice.reducer
