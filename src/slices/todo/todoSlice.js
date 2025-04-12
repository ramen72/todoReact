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
      state.completeValue.push(state.value[action.payload]) 
      state.value.splice(action.payload, 1)
    },
    restoreTodo: (state, action) => {
      state.value.push(state.completeValue[action.payload]) 
      state.completeValue.splice(action.payload, 1)
      console.log(action)
    },
    completeDeleteTodo: (state, action) => {
      state.completeValue.splice(action.payload, 1)      
    },
  },
})

export const { inputValue, addTodo, deleteTodo, editTodo, updateTodo, completeTodo, restoreTodo, completeDeleteTodo } = todoSlice.actions

export default todoSlice.reducer