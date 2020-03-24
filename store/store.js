import {configureStore} from '@reduxjs/toolkit'
import rootReducers from './reducers'

export const initializeStore = () => {
  return configureStore({
    reducer: rootReducers
  })
}
