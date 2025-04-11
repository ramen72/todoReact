import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: ["ramen","Biswas"],
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.value.push(action.payload)
    },
    deleteTodo: (state, action) => {
      state.value.splice(action.payload, 1)      
    },
  },
})

export const { addTodo, deleteTodo } = todoSlice.actions

export default todoSlice.reducer