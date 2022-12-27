import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  value: number,
  slug: string
}

const initialState: CounterState = {
  value: 0,
  slug: ''
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
    set: (state, action: PayloadAction<string>) => {
      state.slug = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, set } = counterSlice.actions

export default counterSlice.reducer