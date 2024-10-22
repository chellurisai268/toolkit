import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/todolist/counterSlice'

export const store = configureStore({
  reducer: {
    counter:counterReducer
  },
})