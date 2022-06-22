import { configureStore } from '@reduxjs/toolkit'
import rootReducers from './reducers'

export const store = configureStore({
  reducer: rootReducers
})
