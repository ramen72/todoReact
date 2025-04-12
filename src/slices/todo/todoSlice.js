import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
  inputValue: "",
  addBtn: true,
  updateIndex: "",

  completeValue:[]
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    inputValue: (state, action) => {
      state.inputValue = action.payload;
    },
    addTodo: (state, action) => {
      state.value.push(action.payload)
      state.inputValue = ""
      console.log(state)
    },
    deleteTodo: (state, action) => {
      state.value.splice(action.payload, 1)      
    },
    editTodo: (state, action) => {
      state.addBtn = false
      state.inputValue = action.payload.newValue;
      state.updateIndex = action.payload.id;
    },
    updateTodo: (state, action) => {
      state.addBtn = true
      state.value[state.updateIndex] = state.inputValue;
      state.inputValue = ""
    },
    completeTodo: (state, action) => {
      state.value.splice(action.payload, 1)      
      state.completeValue.push(state.value[action.payload]) 
      console.log(state.completeValue)     
    },
  },
})

export const { inputValue, addTodo, deleteTodo, editTodo, updateTodo, completeTodo} = todoSlice.actions

export default todoSlice.reducer