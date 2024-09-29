import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: state => state + 1,
    decrement: (state, { payload }) => {
      if (!payload) return state - 1
      return state - payload
    },
    reset: state => (state = 0)
  }
})

export const { increment, decrement, reset } = counterSlice.actions
export default counterSlice.reducer
