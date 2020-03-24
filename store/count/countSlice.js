import {createSlice} from '@reduxjs/toolkit'

let initialState = {
  count: 0,
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state, action) {
      state.count += 1
    },
    decrement(state, action) {
      state.count -= 1
    },
  }
})

export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer