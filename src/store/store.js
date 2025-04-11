import { configureStore } from '@reduxjs/toolkit'
import  counterSlice  from '../slices/counter/counterSlice'
import todoSlice from '../slices/todo/todoSlice'

export const store = configureStore({
  reducer: {
    // count: counterSlice,
    todo: todoSlice,
  },
}) 