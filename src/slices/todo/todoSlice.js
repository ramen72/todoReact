import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: ["ramen","Biswas"],
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state) => {
      console.log("test");
      
    },
  },
})

export const { addTodo } = todoSlice.actions

export default todoSlice.reducer